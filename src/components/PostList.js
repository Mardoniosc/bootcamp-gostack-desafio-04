import React, { Component } from 'react';
import { render } from 'react-dom';
import Mardonio from '../assents/mardonio.jpeg';
import aldo from '../assents/aldo.jpeg';
import alessandra from '../assents/alessandra.jpeg';
import gleice from '../assents/gleice.jpeg';
import lorrane from '../assents/lorrane.jpeg';
import sued from '../assents/sued.jpeg';
import thiago from '../assents/thiago.jpeg';
import matheus from '../assents/matheus.jpeg';

import PostItem from './PostItem';


class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Mardonio Costa",
          avatar: Mardonio
        },
        date: "08 nov 2019",
        content: "É verdade que o LULA foi solto?",
        comments: [
          {
            id: 1,
            author: {
              name: "Maria Gleice",
              avatar: gleice
            },
            content: "É VERDADE VC ♥LA NO GRUPO DA FAMILIA JÁ VIU NEM SO EU #B17 KKKKKKKK,NO GRUPO DOS IRMÃO MEU DEUS DÁ BRIGAAAAA KKKKKKKKKK MAIS NÃO PODEMOS BRIGAR CADA UM ESCOLHER O QUER♥UM ABRAÇO PRIMA"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Manoel Sued",
          avatar: sued
        },
        date: "08 nov 2019",
        content: "Pessoal alguem sabe se a STEFANINI está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Aldo Henrique",
              avatar: aldo
            },
            content: "Se tiver eu não to interessado! kkkkkk"
          }
        ]
      },

      {
        id: 3,
        author: {
          name: "Lorrane Lima",
          avatar: lorrane
        },
        date: "09 nov 2019",
        content: "Pessoal alguem da area de enfermagem?",
        comments: [
          {
            id: 1,
            author: {
              name: "Matheus Patricio",
              avatar: matheus
            },
            content: "Eu não gosto dessa area tem muito sangue, e gosto mesmo e de discoito e chocolate(dodynho), kkkkkkkk"
          }
        ]
      }

    ]
  };

  render(){
    const { posts } = this.state;
    
    return (
      <div className='postlist'>
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    )
  }
}

export default PostList;