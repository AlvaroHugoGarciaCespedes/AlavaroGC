'use client'
import { useUser } from '@/context/Context'

import { useState } from 'react'
import Button from '@/components/Button'
import Subtitle from '@/components/Subtitle'
import Paragraph from '@/components/Paragraph'
import List from '@/components/List'
import Card from '@/components/Card'
import CardH from '@/components/CardH'
import Modal from '@/components/Modal'
import Navleft from '@/components/Navleft'
import Link from 'next/link'

import { WithAuth } from '@/HOCs/WithAuth'

function Home() {

  const [whatsapp, setWhatsapp] = useState(false)
  const [msg, setMsg] = useState(false)
  const [state, setState] = useState(false)
  const { user, userDB, item, setUserItem, modal, setUserModal, setUserProfile, setUserSuccess, success, setUserDatas } = useUser()


  // function handlerState (item) {
  //   item == state 
  //   ? setState(null)
  //   : setState(item)
  // }

  function handlerState(data) {
    setUserModal(data)
  }

  const whatsappHandler = () => {
    setWhatsapp(!whatsapp)
  }

  const onChangeWhatsapp = (e) => {
    setMsg(e.target.value)
  }
  const handlerSendWhatsapp = (e) => {
    const whats = msg.replaceAll('%20')
    userDB && userDB.frontPage && userDB.frontPage['whatsapp'] && window.open(`https://api.whatsapp.com/send?phone=${userDB.frontPage['whatsapp']}&text=${whats}`, '_blank')
  }
  return (
    userDB && <main className="flex min-h-screen w-full flex-col items-center justify-between px-5">
      {userDB && <Modal theme={modal} i={item} />}

      <section className='min-h-screen  w-full lg:pt-[70px] pb-0 flex flex-col justify-center items-center lg:flex-row items-center '>
        <div className='w-screen h-[40vh] flex justify-center items-end lg:w-[50vw] lg:h-[100vh]' style={{ backgroundImage: `url(${userDB.frontPage['url']})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        </div>
        {/* <img src={userDB.frontPage['url']} className='w-screen h-[35vh] flex justify-center items-end lg:w-[50vw] lg:h-[100vh]' alt="" /> */}
        <div className=' flex flex-col  justify-center lg:justify-around lg:w-[50vw] lg:h-auto lg:p-12 pt-[20px] lg:pt-[50px]'>
          {/* <div className='hidden h-[30vh] w-[30vh] lg:block' style={{ backgroundImage: `url(${userDB.frontPage['urlIMG']})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
          </div> */}
          <div className='w-full hidden lg:flex lg:justify-center'>
            <img src={userDB.frontPage['urlIMG']} className='hidden h-[30vh]  lg:block' alt="" />
          </div>
          <h1 className='w-full hidden  lg:block text-center text-[12px] lg:text-[16px]'>{userDB.frontPage['direccion']} </h1>

          <br />
          <div>
            <h1 className='w-full text-center text-[16px] lg:text-[22px]'><span className='text-[#00A582] font-bold'>{userDB.frontPage['nombre']}</span><span className='text-gray-950 font-bold	'>{userDB.frontPage['apellidos']}</span></h1>
            <h1 className='w-full text-center text-[16px] lg:text-[22px]'><span className='text-[#00A582] font-bold'>{userDB.frontPage['especialidad 1']} </span><span className='text-gray-950 font-bold	'>{userDB.frontPage['especialidad 2']}</span></h1>
          </div>
          <br />
          <div className='w-full flex justify-around' >
            <div className='flex flex-col'><span className='text-[#00A582] text-[16px]'>Experiencia</span></div>
            <div className='flex flex-col'><span className='text-[#00A582] text-[16px]'>Celeridad</span></div>
          </div>
          <div className=' lg:grid lg:grid-cols-2 lg:gap-5 '>
            <Link href="#Servicios"><Button theme="Secondary" >Servicios</Button></Link>
            <Link href={`https://api.whatsapp.com/send?phone=${userDB.frontPage['whatsapp']}&text=Hola%20Alvaro`}><Button theme="Primary" >Contactar</Button></Link>
          </div>
        </div>
      </section>

      <section className='w-full pt-[70px]' id="Servicios">
        <Subtitle>Servicios</Subtitle>
        <div className='min-h-screen w-full flex flex-col justify-between items-center lg:flex-row justify-around items-center '>
          <ul className='min-w-[80%] grid grid-cols-1 gap-4'>
            {
              userDB && userDB.services !== undefined && Object.keys(userDB.services).map((i, index) =>
                <div key={index}>
                  <CardH image={userDB.services[i]['url']} service={userDB.services[i]['titulo de servicio']} description={userDB.services[i]['descripcion de servicio']} remote={userDB.services[i]['servicio remoto']} cost={userDB.services[i]['costo']} time={userDB.services[i]['tiempo de entrega']} whatsapp={userDB.services[i]['whatsapp de servicio']} i={i} index={index}></CardH>
                  <div className="inline-flex items-center justify-center w-full">
                    <hr className="w-64 h-px my-8 bg-[#00A582] border-0 dark:bg-gray-700" />
                    <span className="absolute px-3 font-medium text-[#00A582] -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900 z-0">•</span>
                  </div>
                </div>
              )
            }
          </ul>
        </div>
      </section>
      <section className='w-full pt-[70px]' id="Articulos">
        <Subtitle>Artículos</Subtitle>
        <div className='lg:grid lg:grid-cols-2 lg:gap-4 py-5 mt-5'>
          <img src="./articulo.png" className='pt-5 pb-5' alt="" />
          <ul className='border-l-2 border-[#01C89E] pl-5 pt-5 pb-5 flex flex-col justify-center '>
            {
              userDB && userDB.articles !== undefined && Object.keys(userDB.articles).map((i, index) => <List i={i} url={userDB.articles[i] && userDB.articles[i]['url']} title={userDB.articles[i]['titulo de articulo']} key={index} />
              )
            }
          </ul>
        </div>
      </section>

      <Navleft funcion={handlerState}></Navleft>
      <img src="/whatsapp.svg" className="fixed h-[50px] w-[50px] bottom-[80px] right-[20px] lg:bottom-[20px] z-30" onClick={whatsappHandler} alt="" />

      <div className={`fixed bottom-[80px] right-[20px] pt-14 pb-9 px-2 flex flex-grow flex-col justify-end rounded-[10px] border-gray-200 shadow bg-[#F1E6E0] ${whatsapp ? 'fixed' : 'hidden'} z-50`} >
        <div className='absolute top-0 left-0  w-full h-[50px] bg-[#00826A] rounded-t-[10px]'>
          <img src="/perfil.jpg" className='absolute h-[35px] w-[35px] left-[5px] top-[7.5px]  rounded-[35px]' alt="" />
          <div className='absolute flex flex-col left-[50px] top-[12px] text-white text-[12px]'>
            <span className='block text-[10px] m-0'>AlvaroCG</span>
            <span className='text-[8px] m-0'>en linea</span>
          </div>
          <span className='absolute  right-[10px] top-[12px] px-[7.5px] py-[3px]  border-[1px] text-white text-[12px] rounded-[5px]' onClick={whatsappHandler} >X</span>
        </div>
        <div
          className="ml-auto rounded-lg rounded-tr-none m-1 p-2 text-[12px] bg-[#DEF5D4] flex flex-col relative speech-bubble-right">
          <p className="">Hola...?</p>
          <p className="text-gray-600 text-[10px] text-right leading-none">{new Date().getHours()}:{new Date().getMinutes()}</p>
        </div>
        <div className="mr-auto rounded-lg rounded-tl-none m-1 p-2 text-[12px] bg-white flex flex-col relative speech-bubble-left">
          <p>Hola q tal, dinos en q podemos <br /> ayudarte...</p>
          <p className="text-gray-600 text-[10px] text-right leading-none">{new Date().getHours()}:{new Date().getMinutes()}</p>
        </div>

        <div className='flex absolute w-full left-0 bottom-0'>
          <input type="text" className=' w-full text-[12px] rounded-[20px] outline-none px-[10px]' onChange={onChangeWhatsapp} />
          <span className='w-[24px] p-[3px] bg-[#00826A] rounded-[20px]' onClick={handlerSendWhatsapp}><img src="/send.svg" className='h-[18px]' alt="" /></span>
        </div>

      </div>
      <footer className="w-full bg-neutral-900 text-center text-white mt-[70px] z-20" id="Contactos">
        <div className="p-4">
          <h3 className={`w-full text-[#00A582] text-left font-bold text-[26px] pl-[5px]`}>Contactos</h3>
          <br />
          <p className='w-full flex justify-start items-center py-4'>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.7656 33.5626L35.2656 30.0626C35.737 29.597 36.3335 29.2783 36.9825 29.1452C37.6315 29.012 38.3052 29.0702 38.9219 29.3126L43.1875 31.0157C43.8106 31.2686 44.3449 31.7004 44.7231 32.2565C45.1013 32.8126 45.3063 33.4682 45.3125 34.1407V41.9532C45.3089 42.4107 45.2127 42.8627 45.0298 43.282C44.8469 43.7013 44.581 44.0793 44.2482 44.3931C43.9153 44.707 43.5224 44.9502 43.0931 45.1083C42.6637 45.2663 42.2069 45.3358 41.75 45.3126C11.8594 43.4532 5.82812 18.1407 4.6875 8.45319C4.63455 7.97746 4.68292 7.49592 4.82945 7.04024C4.97597 6.58455 5.21731 6.16505 5.5376 5.80934C5.85789 5.45363 6.24987 5.16976 6.68774 4.97641C7.12562 4.78307 7.59947 4.68463 8.07812 4.68756H15.625C16.2984 4.68956 16.9559 4.89298 17.5128 5.27167C18.0697 5.65036 18.5006 6.187 18.75 6.81256L20.4531 11.0782C20.7035 11.6924 20.7674 12.3667 20.6368 13.017C20.5062 13.6672 20.1869 14.2646 19.7187 14.7344L16.2187 18.2344C16.2187 18.2344 18.2344 31.8751 31.7656 33.5626Z" fill="#00A582" />
            </svg>
            <span className='pl-[20px]'>
              {userDB.contactos && userDB.contactos.telefono} - {userDB.contactos && userDB.contactos.celular}
            </span>
          </p>
          <p className='w-full flex justify-start items-center py-4'>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_443)">
                <path d="M44.9028 8.33348C44.7135 8.31397 44.5227 8.31397 44.3333 8.33348H5.44445C5.19521 8.33732 4.94762 8.37469 4.70834 8.44459L24.7778 28.4307L44.9028 8.33348Z" fill="#00A582" />
                <path d="M46.9583 10.2637L26.7361 30.4026C26.2156 30.9199 25.5116 31.2103 24.7778 31.2103C24.0439 31.2103 23.3399 30.9199 22.8194 30.4026L2.77776 10.4164C2.71615 10.6429 2.68348 10.8762 2.68054 11.1109V38.8887C2.68054 39.6254 2.9732 40.3319 3.49413 40.8529C4.01507 41.3738 4.72161 41.6664 5.45832 41.6664H44.3472C45.0839 41.6664 45.7905 41.3738 46.3114 40.8529C46.8323 40.3319 47.125 39.6254 47.125 38.8887V11.1109C47.1139 10.8215 47.0577 10.5357 46.9583 10.2637ZM7.3611 38.8887H5.43054V36.9026L15.5278 26.8887L17.4861 28.847L7.3611 38.8887ZM44.3194 38.8887H42.375L32.25 28.847L34.2083 26.8887L44.3055 36.9026L44.3194 38.8887Z" fill="#00A582" />
              </g>
              <defs>
                <clipPath id="clip0_1_443">
                  <rect width="50" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className='pl-[20px]'>
              {userDB.contactos && userDB.contactos.gmail}

            </span>
          </p>
          <p className='w-full flex justify-start items-center py-4'>
            <svg width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 0.125C13.4432 0.130376 9.07464 1.94292 5.85253 5.16504C2.63041 8.38716 0.817864 12.7557 0.812488 17.3125C0.80703 21.0363 2.02339 24.659 4.27499 27.625C4.27499 27.625 4.74374 28.2422 4.8203 28.3312L18 43.875L31.1859 28.3234C31.2547 28.2406 31.725 27.625 31.725 27.625L31.7265 27.6203C33.977 24.6556 35.1928 21.0346 35.1875 17.3125C35.1821 12.7557 33.3696 8.38716 30.1474 5.16504C26.9253 1.94292 22.5567 0.130376 18 0.125ZM18 23.5625C16.7639 23.5625 15.5555 23.1959 14.5277 22.5092C13.4999 21.8224 12.6988 20.8463 12.2257 19.7043C11.7527 18.5622 11.6289 17.3056 11.8701 16.0932C12.1112 14.8808 12.7065 13.7672 13.5806 12.8931C14.4546 12.019 15.5683 11.4237 16.7807 11.1826C17.9931 10.9414 19.2497 11.0652 20.3918 11.5383C21.5338 12.0113 22.5099 12.8124 23.1967 13.8402C23.8834 14.868 24.25 16.0764 24.25 17.3125C24.2479 18.9695 23.5888 20.558 22.4171 21.7296C21.2455 22.9013 19.657 23.5604 18 23.5625Z" fill="#00A582" />
            </svg>
            <span className='pl-[34px]'>
              {userDB.contactos && userDB.contactos['direccion 1']} <br />
              {userDB.contactos && userDB.contactos['direccion 2']} <br />
              {userDB.contactos && userDB.contactos.departamento + ' - Bolivia'}
            </span>
          </p>
        </div>

        <div className="w-full px-6 pt-6 flex justify-center">
          <div className="mb-6 flex justify-center">
            <a
              href={userDB.contactos && userDB.contactos.facebook ? userDB.contactos.facebook : '#'}
              target='_blank'
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a
              href={userDB.contactos && userDB.contactos.twiter ? userDB.contactos.twiter : '#'}
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>

            <a
              href={userDB.contactos && userDB.contactos.gmail ? userDB.contactos.gmail : '#'}
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                  fillRule="evenodd"
                  clipRule="evenodd" />
              </svg>
            </a>

            <a
              href={userDB.contactos && userDB.contactos.instagram ? userDB.contactos.instagram : '#'}
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            <a
              href={userDB.contactos && userDB.contactos.linkedin ? userDB.contactos.linkedin : '#'}
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>

          </div>
        </div>

        <div
          className="p-4 text-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2023 Copyright:
          <a className="text-whitehite" href="https://swoou.com/"
          >Swoou </a
          >
        </div>
      </footer>
    </main>
  )
}


export default WithAuth(Home)
