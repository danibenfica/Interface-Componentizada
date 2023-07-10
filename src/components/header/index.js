import React from 'react';
import useGithub from '../../hooks/github-hooks';
import * as S from './styled';
import { useState } from 'react';

function Header() {

const { getUser } = useGithub();
const [usernameForSearch, setusernameForSearch] = useState();

function submitGetUser () {
    if(!usernameForSearch) return;
    return  getUser(usernameForSearch);
}

document.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        
        const btn = document.querySelector("#send");

        btn.click();

    }
});


    return  <S.Wrapper>
              <input type="text" 
              name="name"
              placeholder="Digite o username para pesquisa..." 
              onChange={(event) => setusernameForSearch(event.target.value)} 
              id="name" required
              />  
             <button type="submit"
             value="enviar"
             id="send"
              onClick={submitGetUser}>
                <span>
                    Pesquisar
                </span>
             </button>
            </S.Wrapper>

          
}

export default Header
