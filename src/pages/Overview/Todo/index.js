/*
 * @Author: scoyzhao
 * @Date: 2020-10-23 11:10:43
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-29 01:30:40
 */

import React from 'react'
import { Card, Spin, List, Button, Row, Col, Switch, message } from 'antd'
import useTodo from '@/hooks/business/ustTodo'
import AddModal from './AddModal'
import './index.css'

const Todo = () => {
  const [
    result,
    isValidating,
    mutate,
    addItem,
    deleteItem,
    updateItem,
    { adddModalVisible, setAddModalVisible },
  ] = useTodo()

  const { data } = result

  const handleAddTodo = () => {
    setAddModalVisible(true)
  }

  const handleDeleteTodo = async (id) => {
    try {
      // * 简单的一个深拷贝
      const newResult = JSON.parse(JSON.stringify(result))
      let index = null
      for (let i = 0; i < newResult.data.length; i++) {
        if (id === newResult.data[i].id) {
          index = i
          break
        }
      }

      newResult.data.splice(index, 1)
      mutate(newResult, false)
      const res = await deleteItem({ id })
      message.success(res.msg)
      mutate()
    } catch (error) {
      mutate(result, false)
      message.error(error.toString())
    }
  }

  const handleSwitchChange = async (id, checked) => {
    try {
      const newResult = JSON.parse(JSON.stringify(result))
      for (let i = 0; i < newResult.data.length; i++) {
        if (id === newResult.data[i].id) {
          newResult.data[i].isCompleted = checked
          break
        }
      }

      mutate(newResult, false)
      const res = await updateItem({ id, isCompleted: checked })
      message.success(res.msg)
      mutate()
    } catch (error) {
      mutate(result, false)
      message.error(error.toString())
    }
  }

  return (
    <Card
      style={{ height: '600px' }}
      title='TODO List'
      hoverable
      extra={
        isValidating ? <Spin /> : null
      }
    >
      <List
        size="large"
        header={
          <Button
            type='primary'
            onClick={handleAddTodo}
          >
            新增待办
          </Button>
        }
        dataSource={data}
        renderItem={(item, index) =>
          <div className='todo_list_item'>
            <Row>
              <Col
                className={item.isCompleted ? 'todo_list_item_completed' : 'null'}
                span={2}
                offset={1}>
                {index}
              </Col>
              <Col
                className={item.isCompleted ? 'todo_list_item_completed' : 'null'}
                span={12}
              >
                {item.content}
              </Col>
              <Col span={2}>
                <Switch
                  checked={item.isCompleted}
                  onClick={(checked) => handleSwitchChange(item.id, checked)}
                />
              </Col>
              <Col span={2} offset={2}>
                <Button
                  type='danger'
                  onClick={() => handleDeleteTodo(item.id)}
                >
                  删除
                </Button>
              </Col>
            </Row>
          </div>
        }
      />
      {
        adddModalVisible &&
        <AddModal
          setAddModalVisible={setAddModalVisible}
          result={result}
          mutateResult={mutate}
          addTodo={addItem}
        />
      }
    </Card>
  )
}

export default Todo
