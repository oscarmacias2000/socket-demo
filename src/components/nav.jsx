import 'bootstrap/dist/css/bootstrap.min.css';
import { DiJsBadge } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BsFillCameraFill } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useNavigate } from 'react-router';

export default function NavExampls(){
   const navigate = useNavigate();

  const handleEvent =(path)=>{
      navigate(path)
  }

  return (
        <nav class="container navbar navbar-expand-lg  navbar-dark bg-dark">
  <div class="container-fluid">
  <a class="navbar__brand" href="/"><div class="navbar__logo"><b> Socket.demo</b></div></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse container-fluid w-100" id="navbarNavDropdown">
      <ul class="navbar-nav col-12">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Herramientas</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toogle transform rotate-180" href="#" role='button' data-bs-toogle='dropdown' aria-expanded='false'>
            Guide
            </a>
          <ul className='dropdown-menu bg-dark text-white'>
            <li><a className='dropdown-item text-white bg-dark' href='$'><span></span> Tutorial</a></li>
            <li><a className='dropdown-item text-white bg-dark' href='$'><span></span> Examples</a></li>
            <li><a className='dropdown-item text-white bg-dark' href='$'><span></span> Emit cheatseet</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle transform rotate-180" href="#"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Enlaces
          </a>
          <ul class="dropdown-menu bg-dark text-gray">
            <li><a class="dropdown-item text-white bg-dark " href="/nodo" role='button' data-bs-toogle="dopdown" aria-expanded="false" id='button' onClick={handleEvent('/nodo')}><spam><DiNodejsSmall/></spam> Nodejs</a></li>
            <li><a class="dropdown-item text-white bg-dark" href="#"><span><DiReact/></span> Reactjs</a></li>
            <li><a class="dropdown-item text-white bg-dark" href="#"><span><DiJsBadge/></span> typescript</a></li>
            <li><a class="dropdown-item text-white bg-dark" href="#"><span><DiJsBadge/></span> socket</a></li>
            <li><a class="dropdown-item text-white bg-dark" href="#"><span><BsFillChatDotsFill/></span> twilio</a></li>
            <li><a class="dropdown-item text-white bg-dark" href="#"><span><BsFillCameraFill/></span> unplash</a></li>
            <li><a class="dropdown-item text-white bg-dark" href="#"><span><AiOutlineWhatsApp/></span> whatssap</a></li>
            <li><a class="dropdown-item text-white bg-dark" href="#"><span><DiJsBadge/></span> facebook</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">API</a>
        </li>
       
        <li class="nav-item dropdown">
          <a class="nav-link" href="#">Ecosystem
          </a>
          <ul className='dropdown-menu bg-dark text-gray'>
            <li><a className='dropdown-item text-white bg-dark' href='$'><span></span> Help</a></li>
            <li><a className='dropdown-item text-white bg-dark' href='$'><span></span> Troubleshooting</a></li>
            <li><a className='dropdown-item text-white bg-dark' href='$'><span></span> Stack Overflow</a></li>
            <li><a className='dropdown-item text-white bg-dark' href='$'><span></span> Github Discussion </a></li>
            <li><a className='dropdown-item text-white bg-dark' href='$'><span></span> Slack</a></li>

            <li><a className='dropdown-item' href='$'><span></span> News</a></li>
            <li><a className='dropdown-item' href='$'><span></span> Blog</a></li>
            <li><a className='dropdown-item' href='$'><span></span> Twitter</a></li>



          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toogle" href="#">
            About
            </a>
            <ul className='dropdown-menu'>
              <li><a className='dropdown-item' href='$'><span></span> FAQ</a></li>
              <li><a className='dropdown-item' href='$'><span></span> Changelog </a></li>
              <li><a className='dropdown-item' href='$'><span></span> Roadmap </a></li>
              <li><a className='dropdown-item' href='$'><span></span> Become a sponsor</a></li>
            </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Server API</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Client API</a>
        </li>
      </ul>
    </div>
  </div>
  <div className='nav-item'>
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
</svg>
  </div>
</nav>
    )
}
