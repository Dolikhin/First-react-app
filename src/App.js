import React, { useEffect, useState } from 'react';
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
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService';
import Loader from './components/UI/loader/Loader';
import { useFetching } from './hooks/useFetching';
import { getPageCount, getPagesArray } from './utils/pages';
import Pagination from './components/UI/pagination/Pagination';


function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAnsSearchedPosts = usePosts(posts, filter.sort, filter.query)




  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit));
  })

  console.log(totalPages)

  useEffect(() => {
    fetchPosts()
  }, [page])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
   
  }


  return (

    <div className="App">
      <button onClick={fetchPosts}>GET POSTS</button>
      <MyButton style={{ marginTop: '15px' }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>


      <hr style={{ margin: '15px 0' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter} />
      {postError &&
        <h1>Произошла ошибка... ${postError}</h1>
      }
      {isPostLoading
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}><Loader /></div>
        : <Postlist remove={removePost} posts={sortedAnsSearchedPosts} title={"Посты про JS"} />
      }
      <Pagination page={page} changePage={changePage} totalPages={totalPages}/>

    </div>
  );
}

export default App;
