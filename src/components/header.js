import styled from 'styled-components';
// import { auth,provider } from "../firebase";

const Header = (props) => {
    
        // const handleAuth =() => {
        //     auth
        //     .signInWithPopup(provider)
        //     .then((result) => {
        //     setUser(result.user);
        //     })
        //     .catch((error) => {
        //     alert(error.message);
        //     });
        // }

        return(
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="brand-logo"></img>
            </Logo>
            <NavMenu>
                <a href="/home">
                    <img src="/images/home-icon.svg" alt="HOME"/>
                    <span>MENU</span>
                </a>    
                <a href="/home">
                    <img src="/images/search-icon.svg" alt="seatch"/>
                    <span>SEARCH</span>
                </a>
                <a href="/home">
                    <img src="/images/watchlist-icon.svg" alt="watchlist"/>
                    <span>WATCHLIST</span>
                </a>  
                <a href="/home">
                    <img src="/images/original-icon.svg" alt="originals"/>
                    <span>ORIGINALS</span>
                </a> 
                <a href="/home">
                    <img src="/images/movie-icon.svg" alt="movies"/>
                    <span>MOVIES</span>
                </a> 
                <a href="/home">
                    <img src="/images/series-icon.svg" alt="series"/>
                    <span>SERIES</span>
                </a> 
            </NavMenu>
           
            <LoginButton >LOGIN</LoginButton>
        </Nav>
        );
    
};
const Nav = styled.nav`
    position:fixed;
    top:0;
    left:0;
    right:0;
    background-color:#090b13;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 36px;
    letter-spacing:10px;
    z-index:3;
`
const Logo =styled.a`
    padding:10px 0;
    width:80px;
    margin-top:0;
    font-size:0;
    display:inline-block;

    img{
        display:block;
        width:100%;
    }
`
const NavMenu =styled.a`
    align-items:center;
    display:flex;
    flex-flow:row nowrap;
    heigth:100%;
    justify-content:flex-end;
    margin:0;
    padding:0;
    color:#fff;
    position:relative;
    margin-right:auto;

    a{
        display:flex;
        padding:0 12px;
        align-items:center;

    
        img{
            heigth:20px;
            min-width:20px;
            width:20px;
            z-index:auto;
        }
        /*for animation below nav-menu */
        span{
            color: rgb(249,249,249);
            font-size:13px;
            letter-spacing:0.5px;
            line-height:1.08;
            padding:5px 5px;
            white-space: nowrap;
            position: relative;
        
            &:before{
                content:'';
                height:2px;
                opacity:0;
                position:absolute;
                right:0px;
                left:0px;
                transform-origin:left center;
                transform:scaleX(0);
                transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.95) 0s;
                background-color: rgb(249,249,249);
                border-radius:0px 0px 4px 4px;
                bottom:-6px;
                visibility:hidden;
                width: auto;
            }
        }
        &:hover{
            span:before{
                visibility:visible;
                transform:scaleX(1);
                opacity:1 ;
            }
        }
    }
     /* @media(max-width: 768px){
        display: none;
    } */
`

const LoginButton = styled.a`
    color:#fff;
    background-color:rgba(0,0,0,0.6);
    padding: 8px 16px;
    text-transform:uppercase;
    letter-spacing:1.5px;
    border:1px solid #f9f9f9;
    border-radius:4px;
    transition: all 0.2s ease 0s;

    &:hover{
        background-color:#f9f9f9;
        color:#000;
        border-color: transparent;
    }
`
export default Header