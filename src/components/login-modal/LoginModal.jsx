import React, { useState } from 'react'
import Guitar from '../../assets/loginModal/guitar-olx.png'
import { RxCross2 } from "react-icons/rx";
import { RiSmartphoneLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from 'firebase/auth';
import { auth,googleProvider } from '../../firebase/FireBase';

function LoginModal() {
    const [closeModal, setCloseModal] = useState(true)

    const googleSignIn = async () => {
        try {
            await signInWithPopup(auth,googleProvider)
        }
        catch (error){
            console.log(error)
        }
    }
    return (
        
        <>
            {closeModal &&
                <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div class="fixed inset-0 bg-zinc-950 bg-opacity-75 transition-opacity"></div>
                    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div class="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
                            <div class="relative transform overflow-hidden bg-white text-left shadow-xl transition-all w-full md:w-96 md:max-w-lg min-h-screen md:min-h-0 md:rounded-sm">
                                <div class="bg-white px-5 pb-4 pt-5 sm:p-6 sm:pb-4">

                                    <div class="flex justify-end relative  md:left-0 ">
                                        <span
                                            onClick={() => setCloseModal(!closeModal)}
                                            class="absolute md:relative cursor-pointer font-semibold text-4xl hover:text-green-500 transition duration-200 ease-out md:left-3 md:bottom-3 "
                                        >
                                            <RxCross2 />
                                        </span>
                                    </div>

                                    <div class="sm:flex sm:items-start mt-28 md:mt-0">
                                        <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                                            <div class="mt-2">
                                                <img src={Guitar} class="w-20 h-20 mx-auto" alt="Guitar" />
                                                <p class="text-base font-medium mt-5 text-center">
                                                    Help us to become one of the safest places<br /> to buy and sell
                                                </p>


                                                <div class="flex border-2 border-black p-2 rounded-sm mt-12 cursor-pointer w-72 mx-auto hover:border-green-500 transition duration-200 ease-in-out">
                                                    <RiSmartphoneLine className='text-2xl' />
                                                    <h1 class="font-semibold ml-3">Continue with phone</h1>
                                                </div>

                                                <div onClick={ googleSignIn }class="flex border border-gray-300 p-2 rounded-sm mt-4 cursor-pointer w-72 mx-auto hover:bg-blue-100 transition duration-200 ease-in-out hover:border-blue-500">
                                                    <FcGoogle className="text-2xl" />
                                                    <h1 class="font-semibold ml-12">Continue with Google</h1>
                                                </div>

                                                <h1 class="text-center mt-4 cursor-pointer">OR</h1>
                                                <h1 class="text-center mt-4 underline cursor-pointer hover:text-green-500 transition duration-200 ease-in-out" >Login with Email</h1>

                                                <h1 class="text-center mt-14 text-xs">
                                                    All your personal details are safe with us.
                                                </h1>
                                                <h1 class="text-center mt-4 text-xs">
                                                    If you continue, you are accepting
                                                    <span class="text-blue-600 cursor-pointer">OLX Terms and<br />Conditions and Privacy Policy</span>
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </>

    )
}

export default LoginModal
