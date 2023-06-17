'use client'
import { useUser } from '@/context/Context'
import { onAuth, signInWithEmailAndPassword, writeUserData } from '@/firebase/database'
import { uploadIMG } from '@/firebase/storage'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import Input from '@/components/Input'
// import Error from '@/components/Error'
import { generateUUID } from '@/utils/uuid'
import { useMask } from '@react-input/mask';

import { useRouter } from 'next/navigation';

export default function Modal({ theme, styled, click, children, }) {

    const { user, userDB, setUserItem, setUserModal, item, setUserProfile, setUserSuccess, success, setUserData } = useUser()

    const router = useRouter()
    const [data, setData] = useState({})
    const [dataURL, setDataURL] = useState({})
    const [check, setCheck] = useState(false)
    const inputRefWhatsApp = useMask({ mask: '+ 591 __ ___ ___', replacement: { _: /\d/ } });

    function checkHandler() {
        setCheck(!check)
    }
    function onChangeHandler(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    function handlerImage(e) {
        setDataURL({
            ...dataURL,
            [e.target.name]: URL.createObjectURL(e.target.files[0])
        })
    }

    function saveFrontPage(e) {
        e.preventDefault()
        const obj = {
            [e.target[2].name]: e.target[2].value,
            [e.target[3].name]: e.target[3].value,
            [e.target[4].name]: e.target[4].value,
            [e.target[5].name]: e.target[5].value,
            [e.target[6].name]: e.target[6].value,
            [e.target[7].name]: e.target[7].value,
            [e.target[8].name]: e.target[8].value,
            [e.target[9].name]: e.target[9].value,
            [e.target[10].name]: e.target[10].value,
            [e.target[11].name]: e.target[11].value,
        }
        e.target[0].files[0] && uploadIMG('frontPage', 'frontPage', 'frontPage', e.target[0].files[0], obj, setUserData, setUserSuccess, 'url')
        e.target[1].files[0] && uploadIMG('frontPage', 'frontIMG', 'frontIMG', e.target[1].files[0], obj, setUserData, setUserSuccess, 'urlIMG')
        e.target[0].files[0] === undefined && e.target[1].files[0] === undefined && writeUserData('frontPage', obj, setUserData, setUserSuccess)
    }
    function addService(e) {
        e.preventDefault()

        const filename = generateUUID()
        const obj = {
            ['servicio remoto']: check,
            [e.target[2].name]: e.target[2].value,
            [e.target[3].name]: e.target[3].value,
            [e.target[4].name]: e.target[4].value,
            [e.target[5].name]: e.target[5].value,
            [e.target[6].name]: e.target[6].value,
        }

        console.log(obj)
        e.target[0].files[0] && uploadIMG(`services/${item !== undefined ? item : filename}`, 'services', filename, e.target[0].files[0], obj, setUserData, setUserSuccess, 'url')
        e.target[0].files[0] === undefined && writeUserData(`services/${item !== undefined ? item : filename}`, obj, setUserData, setUserSuccess)
    }


    function addArticle(e) {
        e.preventDefault()

        const filename = generateUUID()
        const obj = {
            [e.target[0].name]: e.target[0].value,
            [e.target[1].name]: e.target[1].value,
        }
        writeUserData(`articles/${item !== undefined ? item : filename}`, obj, setUserData, setUserSuccess)
    }


function close () {
    setUserModal(false)
}


    useEffect(() => {
        setData(userDB)
        // item !== undefined && userDB && userDB.services && userDB.services[item]['servicio remoto'] && setCheck(userDB.services[item]['servicio remoto'])
    }, [userDB])

    console.log(data)
    switch (theme) {
        case 'Portada':
            return <div className="fixed top-0 left-0 flex justify-center w-full h-auto bg-[#000000b4] p-0 z-30">
                <form className="relative w-[95%] h-screen overflow-y-scroll lg:w-[50%] bg-white border-b border-gray-900/10 pt-16 pb-16 lg:pb-4 px-5" onSubmit={saveFrontPage}>
                    <div className="col-span-full">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Administrar portada principal</h2>
                        <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">Foto de perfil de portada</label>
                        <div className="w-full flex justify-center">
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 md:w-[250px] md:h-[200px]" style={{ backgroundImage: `url('${dataURL && dataURL.frontPage && dataURL.frontPage ? dataURL.frontPage : (userDB && userDB.frontPage && userDB.frontPage.url)}')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                                <div className="text-center">
                                    <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                                    </svg>
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label htmlFor="fileUpload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                            <span>Upload a file</span>
                                            <input id="fileUpload" name="frontPage" onChange={handlerImage} type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">Imagen de portada</label>
                        <div className="w-full flex justify-center">
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 md:w-[250px] md:h-[200px]" style={{ backgroundImage: `url('${dataURL && dataURL.frontIMG && dataURL.frontIMG ? dataURL.frontIMG : (userDB && userDB.frontPage && userDB.frontPage.urlIMG)}')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                                <div className="text-center">
                                    <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                                    </svg>
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label htmlFor="fileUploadIMG" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                            <span>Upload a file</span>
                                            <input id="fileUploadIMG" name="frontIMG" onChange={handlerImage} type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
                                <input type="text" name="nombre" className="block w-full rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={data && data.frontPage && data.frontPage['nombre']} />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Apellidos</label>
                                <input type="text" name="apellidos" className="block w-full rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={data && data.frontPage && data.frontPage['apellidos']} />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Especialidad 1</label>
                                <input type="text" name="especialidad 1" className="block w-full rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={data && data.frontPage && data.frontPage['especialidad 1']} />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Especialidad 2</label>
                                <input type="text" name="especialidad 2" className="block w-full rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={data && data.frontPage && data.frontPage['especialidad 2']} />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Whatsapp</label>
                                <input type="text" name="whatsapp" className="block w-full rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={data && data.frontPage && data.frontPage['whatsapp']} ref={inputRefWhatsApp} />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Facebook</label>
                                <input type="text" name="facebook" className="block w-full rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={data && data.frontPage && data.frontPage['facebook']} />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Twiter</label>
                                <input type="text" name="twiter" className="block w-full rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={data && data.frontPage && data.frontPage['twiter']} />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Gmail</label>
                                <input type="text" name="gmail" className="block w-full rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={data && data.frontPage && data.frontPage['google']} />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Instagram</label>
                                <input type="text" name="instagram" className="block w-full rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={data && data.frontPage && data.frontPage['instagram']} />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Linkedin</label>
                                <input type="text" name="linkedin" className="block w-full rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={data && data.frontPage && data.frontPage['linkedin']} />
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <Button type="submit" theme="Primary">Guardar</Button>
                    </div>
                    <div className="absolute w-[50px] top-5 right-5 text-white p-1 rounded-tl-lg rounded-br-lg text-center bg-red-600" onClick={close}>
                        X
                    </div>
                </form>
            </div>

            break



        case 'Servicios':
            return <div className="fixed top-0 flex justify-center w-full h-auto bg-[#000000b4] p-0 z-30">
                <form className="relative w-[95%] h-screen overflow-y-scroll lg:w-[50%] bg-white border-b border-gray-900/10 pt-16 pb-4 px-5" onSubmit={addService}>
                    <div className="col-span-full">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">Administrar Servicios</h2>
                        <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">Foto de servicio</label>
                        <div className="w-full flex justify-center">
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 md:w-[250px] md:h-[200px]" style={{ backgroundImage: `url('${dataURL && dataURL.servicioIMG && dataURL.servicioIMG ? dataURL.servicioIMG : (userDB && userDB.services && userDB.services[item] && userDB.services[item].url)}')`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                                <div className="text-center">
                                    <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                                    </svg>
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label htmlFor="servicioIMG" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                            <span>Upload a file</span>
                                            <input id="servicioIMG" name="servicioIMG" onChange={handlerImage} type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Servicio presencial y remoto</label>
                    <div className='flex justify-center w-full'>
                        <label className="relative inline-flex items-center cursor-pointer" >
                            <input type="checkbox" value="" className="sr-only peer" onClick={checkHandler} />
                            <div className={`w-11 h-6 bg-gray-200 rounded-full ${check && 'ring-4 ring-blue-300 bg-blue-600'}  peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600`}></div>
                        </label>
                    </div>
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Título de servicio</label>
                                <input type="text" name="titulo de servicio" className="block w-full rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={data && data.services && data.services[item] && data.services[item]['titulo de servicio']} />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Descripción de servicio</label>
                                <input type="text" name="descripcion de servicio" className="block w-full rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={data && data.services && data.services[item] && data.services[item]['descripcion de servicio']} />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Tiempo de entrega</label>
                                <input type="text" name="tiempo de entrega" className="block w-full rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={data && data.services && data.services[item] && data.services[item]['tiempo de entrega']} />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Costo</label>
                                <input type="text" name="costo" id="first-name" className="block w-full rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={data && data.services && data.services[item] && data.services[item]['costo']} />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Whatsapp para la solicitud de servicio</label>
                                <input type="text" name="whatsapp de servicio" ref={inputRefWhatsApp} id="first-name" className="block w-full rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={data && data.services && data.services[item] && data.services[item]['whatsapp de servicio']} />
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <Button type="submit" theme="Primary" >Guardar</Button>
                    </div> <div className="absolute w-[50px] top-5 right-5 text-white p-1 rounded-tl-lg rounded-br-lg text-center bg-red-600" onClick={close}>
                        X
                    </div>

                </form>
            </div>
            break
        case 'Articulos':
            return <div className="fixed top-0 flex justify-center w-full h-auto bg-[#000000b4] p-0 z-30">
                <form className="relative w-[95%] h-screen overflow-y-scroll lg:w-[50%] bg-white border-b border-gray-900/10 pt-16 pb-4 px-5" onSubmit={addArticle}>
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Administrar artículos</h2>

                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Título de artículo</label>
                                <input type="text" name="titulo de articulo" className="block w-full rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={data && data.articles && data.articles[item] && data.articles[item]['titulo de articulo']} />
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Url</label>
                                <input type="text" name="url" className="block w-full rounded-md border-0 p-1.5 mt-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={data && data.articles && data.articles[item] && data.articles[item]['url']} />
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <Button type="submit" theme="Primary" >Guardar</Button>
                    </div>
                    <div className="absolute w-[50px] top-5 right-5 text-white p-1 rounded-tl-lg rounded-br-lg text-center bg-red-600" onClick={close}>
                        X
                    </div>
                </form>
            </div>
            break
        default:
    }
}

