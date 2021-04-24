import React from 'react'
import { useHistory } from 'react-router';
import { Sidebar, TodoTask } from '../index';
import { useAuth } from '../../hooks/auth.hook';
import { useSelector, useDispatch } from 'react-redux'
import { 
         featchFolders, 
         featchAddFolders, 
         featchEditTitle, 
         featchAddTask,
         featchDeleteTask,
         compliteTask,
         featchEditTask,
         featchDeleteFolders
        } from '../../redux/actions/folders'


function Main() {
      const hist = useHistory();
      const dispatch = useDispatch();
      const { folder } = useSelector(( { folders } ) => folders );
      const [idFolder, setId] = React.useState(null);
      const { isLoad, userId } = useAuth()
      
      React.useEffect( () => {
        if(isLoad){
          const url = `http://localhost:3001/users/${userId}`
          dispatch(featchFolders(url))
        }
      },[userId])

      React.useEffect(() => {
        const id = folder.length > 0 ? Math.max(...folder.map(fol => fol.id)) + 1 : 1
        setId(id)
      },[folder])

      const handleEditText = (ids, name) => {
        const url = `http://localhost:3001/users/changetitle/${userId}`
        dispatch(featchEditTitle( url, ids, name ))
      }
      
      const handleDeleteTask = (ids,index) => {
          if (window.confirm('Вы действительно хотите удалить задачу')){
              const newTask = folder.map(item => {
                  if(item.id === ids){
                    item.tasks = item.tasks.filter((_,curInd) => curInd !== index)
                  }
                  return item
              })
              const url = `http://localhost:3001/users/deletetask/${userId}`
              dispatch(featchDeleteTask( url, ids, newTask ))
          }
      }
      const handleDeleteFolder = (ids, text) => {
        if (window.confirm('Вы действительно хотите удалить папку')){
            const newFolder = folder.filter(item =>  item.id !== ids );
            const url = `http://localhost:3001/users/deletefolder/${userId}`
            dispatch(featchDeleteFolders( url, newFolder, hist ))
        }
        alert(`Папка ${text} удалена`)
      }
      
      const handleAddTask = ( ids, obj ) => {
        const url = `http://localhost:3001/users/addtask/${userId}`
        dispatch(featchAddTask( url, ids, obj ))
      }
      
      const handleAddFolder = (obj) => {
        const url = `http://localhost:3001/users/addfolder/${userId}`
        dispatch(featchAddFolders( url, obj ))
      }
      
      const handleCompliteTask = (id,index,complite) => {
        dispatch(compliteTask( id, index, complite ))
      }

      const handleEditTask = (obj, index, ids) => {
        const url = `http://localhost:3001/users/edittask/${userId}`
        dispatch(featchEditTask( url, obj, index, ids ))
      }

    return (
            <>
                <Sidebar  
                    folder={folder} 
                    handleDeleteFolder={handleDeleteFolder}
                    handleAddFolder={handleAddFolder}
                    idFolder={idFolder}
                  />
                  <TodoTask  
                    items={folder} 
                    handleEditText={handleEditText}
                    handleDeleteTask={handleDeleteTask}
                    handleCompliteTask={handleCompliteTask}
                    handleAddTask={handleAddTask}
                    handleEditTask={handleEditTask}
                  />
            </>
    )
}

export default Main
