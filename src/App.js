import React, { useMemo, useState } from 'react';
// import Counter from './components/Counter';
// import ClassCounter from './components/ClassCounter';
// import PostItem from './components/PostItem';
import Postlist from './components/Postlist';
import './styles/App.css';
import PostForm from './components/PostForm';
// import MySelect from './components/UI/select/MySelect';
// import MyInput from './components/UI/input/MyInput';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/myModal/MyModal';
import MyButton from './components/UI/button/MyButton';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'aa', body: 'яя' },
    { id: 2, title: 'uuu', body: 'вв' },
    { id: 3, title: 'bb', body: 'ооо' },
  ])
  
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);


const sortedPosts = useMemo(() => {
  console.log('function worging');
  if (filter.sort) {
    return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
  }
  return posts;
}, [filter.sort, posts])

const sortedAnsSearchedPosts = useMemo(() => {
  
  return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
}, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (

    <div className="App">

      <MyButton style={{marginTop: '15px'}}onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>

      
      <hr style={{ margin: '15px 0' }} />
      <PostFilter 
      filter={filter} 
      setFilter={setFilter}/>
      
      <Postlist remove={removePost} posts={sortedAnsSearchedPosts} title={"Посты про JS"} />
    
    
    </div>
  );
}

export default App;
