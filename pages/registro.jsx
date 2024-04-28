import Head from 'next/head';
import React, { useState } from 'react';
import { GoogleReCaptchaProvider, GoogleReCaptcha } from "react-google-recaptcha-v3";
import { useForm } from "react-hook-form"
import { addBoleto } from '../services/boleto';
import Swal from 'sweetalert2'

const Registro = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        addBoleto({
            ...data,
            reCaptcha: token
        }).then(res => {
            Swal.fire({
                title: 'Entrada generada correctamente',
                text: "Se te enviará a tu correo la entrada con el QR",
                icon: 'success',
                confirmButtonText: 'Ok'
              }).then(() => {
                reset();
              })
            console.log(res)
        }).catch(err => {
            Swal.fire({
                title: '¡Error!',
                text: err.response.data.message,
                icon: 'error',
                confirmButtonText: 'Ok'
              })
            console.log(err.response.data.message)
        });
    }

    const [showStudentForm, setshowStudentForm] = useState(false);
    const [token, setToken] = useState("");
    const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);


    const handleRadioChange = event => {
        setshowStudentForm(event.target.value === "yes");
    };

    const setTokenFunc = (getToken) => {
        setToken(getToken)
    };

    return (
        <>
            <Head>
                <title>Registro - Simposio</title>
                <meta name="description" content="Registro para el simposio de sistemas del ITESCHAM" />
                <link rel="icon" href="/logo.ico" />
            </Head>
            <main className='pt-16'>
                <div className="flex items-center justify-center p-12 text-white">
                    <div className="mx-auto w-full max-w-[550px]">
                        <h1 className='text-3xl font-bold'>Formulario de registro</h1>
                        <p className='mb-5 text-gray-400'>Llena el siguiente formulario para registrarte en el simposio, se te enviará a tu correo la entrada con el código QR para poder ser escaneado en la entrada del evento.</p>
                        <form method="POST" onSubmit={handleSubmit(onSubmit)}>
                            <div className="-mx-3 flex flex-wrap">
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label
                                            className="mb-3 block text-base font-medium text-white"
                                        >
                                            Nombres
                                        </label>
                                        <input
                                            {...register("firstName", {
                                                required: true,
                                                maxLength: 30,
                                                pattern: /^[A-Za-záéíóúÁÉÍÓÚüÜñÑ\s]+$/
                                            })}
                                            placeholder="Nombres"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                        {errors?.firstName?.type === "required" && <p className='text-red-300 mt-2'>Este campo es requerido</p>}
                                        {errors?.firstName?.type === "maxLength" && (
                                            <p className='text-red-300 mt-2'>Tus nombres no puede exceder de 30 palabras</p>
                                        )}
                                        {errors?.firstName?.type === "pattern" && (
                                            <p className='text-red-300 mt-2'>Solamente letras</p>
                                        )}
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label
                                            className="mb-3 block text-base font-medium text-white"
                                        >
                                            Apellidos
                                        </label>
                                        <input
                                            {...register("lastName", {
                                                required: true,
                                                maxLength: 30,
                                                pattern: /^[A-Za-záéíóúÁÉÍÓÚüÜñÑ\s]+$/
                                            })}
                                            placeholder="Apellidos"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                        {errors?.lastName?.type === "required" && <p className='text-red-300 mt-2'>Este campo es requerido</p>}
                                        {errors?.lastName?.type === "maxLength" && (
                                            <p className='text-red-300 mt-2'>Tus apellidos no puede exceder de 30 palabras</p>
                                        )}
                                        {errors?.lastName?.type === "pattern" && (
                                            <p className='text-red-300 mt-2'>Solamente letras</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5">
                                <label
                                    className="mb-3 block text-base font-medium text-white"
                                >
                                    Edad
                                </label>
                                <input
                                    type="number"
                                    {...register("age", {
                                        required: true,
                                        min: 10,
                                        max: 99
                                    })}
                                    placeholder="Edad"
                                    min="0"
                                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                                {errors?.age?.type === "required" && <p className='text-red-300 mt-2'>Este campo es requerido</p>}
                                {errors?.age?.type === "min" && <p className='text-red-300 mt-2'>La edad minima para asistir es de 10 años</p>}
                                {errors?.age?.type === "max" && <p className='text-red-300 mt-2'>La edad minima para asistir es de 99 años</p>}

                            </div>
                            <div className="mb-5">
                                <label
                                    className="mb-3 block text-base font-medium text-white"
                                >
                                    Correo electrónico
                                </label>
                                <input
                                    {
                                    ...register("email", {
                                        required: true,
                                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Patrón para validar el correo electrónico
                                    })
                                    }
                                    placeholder="Correo electrónico"
                                    min="0"
                                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                                {errors?.email?.type === "required" && <p className='text-red-300 mt-2'>Este campo es requerido</p>}
                                {errors?.email?.type === "pattern" && (
                                    <p className='text-red-300 mt-2'>Debe tener un formato de correo electrónico</p>
                                )}
                            </div>

                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-white">
                                    ¿Eres un estudiante del ITESCHAM?
                                </label>
                                <div className="flex items-center space-x-6">
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            value={"yes"}
                                            {
                                            ...register("student", {
                                                required: true
                                            })
                                            }
                                            onChange={handleRadioChange}
                                            className="h-5 w-5"
                                        />
                                        <label
                                            className="pl-3 text-base font-medium text-white"
                                        >
                                            Sí
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            value={"no"}
                                            {
                                            ...register("student", {
                                                required: true
                                            })
                                            }
                                            onChange={handleRadioChange}
                                            className="h-5 w-5"
                                        />
                                        <label
                                            className="pl-3 text-base font-medium text-white"
                                        >
                                            No
                                        </label>
                                    </div>
                                </div>
                                {errors?.student?.type === "required" && <p className='text-red-300 mt-2'>Este campo es requerido</p>}
                            </div>

                            {
                                showStudentForm && <>
                                    <div className="mb-5">
                                        <label
                                            className="mb-3 block text-base font-medium text-white"
                                        >
                                            Matrícula
                                        </label>
                                        <input
                                            {
                                            ...register("matricula", {
                                                required: true,
                                                pattern: /^[A-Za-z0-9]{1,15}$/
                                            })
                                            }
                                            placeholder="Matrícula"
                                            className="w-full appearance-none 
                                            rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base 
                                            font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                        {errors?.matricula?.type === "required" && <p className='text-red-300 mt-2'>Este campo es requerido</p>}
                                        {errors?.matricula?.type === "pattern" && (
                                            <p className='text-red-300 mt-2'>Debe tener un formato de matricula</p>
                                        )}
                                    </div>

                                    <div className="mb-5">
                                        <label
                                            className="mb-3 block text-base font-medium text-white"
                                        >
                                            Carrera
                                        </label>
                                        <select id="carrera"
                                            className="w-full
                                        rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base 
                                        font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                            {
                                            ...register("carrera", {
                                                required: true
                                            })
                                            }
                                        >
                                            <option value="sistemas computacionales">Ingeniería en Sistemas Computacionales</option>
                                            <option value="electromecánica">Ingeniería en Electromecánica</option>
                                            <option value="turismo">Licenciatura en Turismo</option>
                                            <option value="ambiental">Ingeniería en Ambiental</option>
                                            <option value="logística">Ingeniería en Logística</option>
                                            <option value="gestión empresarial">Ingeniería en Gestión Empresarial</option>
                                            <option value="administración">Ingeniería en Administración</option>
                                            <option value="pesquerías">Ingeniería en Pesquerías</option>
                                        </select>
                                    </div>
                                    {errors?.carrera?.type === "required" && <p className='text-red-300 mt-2'>Este campo es requerido</p>}


                                    <div className="mb-5">
                                        <label
                                            className="mb-3 block text-base font-medium text-white"
                                        >
                                            Semestre
                                        </label>
                                        <select id="semestre"
                                            {
                                            ...register("semestre", {
                                                required: true
                                            })
                                            }
                                            className="w-full
                                        rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base 
                                        font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                                            <option value="segundo">Segundo</option>
                                            <option value="cuarto">Cuarto</option>
                                            <option value="sexto">Sexto</option>
                                            <option value="octavo">Octavo</option>
                                        </select>
                                    </div>
                                    {errors?.semestre?.type === "required" && <p className='text-red-300 mt-2'>Este campo es requerido</p>}
                                </>
                            }


                            <div>
                                <button
                                    className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                                >
                                    Enviar
                                </button>
                            </div>

                            <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_REACT_APP_RECAPTCHA_KEY}>
                                <GoogleReCaptcha
                                    className="google-recaptcha-custom-class"
                                    onVerify={setTokenFunc}
                                    refreshReCaptcha={refreshReCaptcha}
                                />
                            </GoogleReCaptchaProvider>
                        </form>
                    </div>
                </div>

            </main>
        </>
    );
}

export default Registro;
