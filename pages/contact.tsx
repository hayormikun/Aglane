import React from 'react'
import { Heading } from '../components/Heading'
import { SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useMutation } from 'react-query'
import { Success } from '../components/Success'
import { ErrorPrompt } from '../components/ErrorPrompt'
import { HtmlHead } from '../components/Head'
import Link from 'next/link'

type FormValues = {
  name: string
  email: string
  message: string
}

const socials = [
  {
    logo: 'twitter',
    name: '@aglaneng',
    link: 'https://twitter.com/aglaneng',
  },

  {
    logo: 'instagram',
    name: '@aglaneng',
    link: 'https://instagram.com/aglaneng',
  },

  {
    logo: 'email',
    name: 'info@aglane.ng',
    link: 'mailto:info@aglane.ng',
  },

  {
    logo: 'phone',
    name: '+234 803 244 8790',
    link: 'tel:+234 803 244 8790',
  },

  {
    logo: 'linkedin',
    name: 'Aglane Nigeria Ltd',
    link: 'https://linkedin.com/AglaneNigeriaLtd',
  },

  {
    logo: 'facebook',
    name: 'Aglane Nigeria Ltd',
    link: 'https://facebook.com/AglaneNigeriaLtd',
  },
]

const schema = yup.object().shape({
  name: yup.string().required('Please enter your fullname'),
  email: yup
    .string()
    .required('Please enter your email')
    .email('Please enter a valid email address'),
  message: yup.string().required('Please enter your message here'),
})

type FormInputs = yup.InferType<typeof schema>

const submitForm = async (data: FormValues): Promise<FormValues> => {
  return await axios.post(`${process.env.BASE_URL}/message`, data)
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  })

  const { mutate, isLoading, isError, error, isSuccess } = useMutation(
    submitForm,
  )

  const onSubmit: SubmitHandler<FormInputs | FormValues> = async (
    data: FormInputs | FormValues,
  ) => {
    mutate(data)
  }

  return (
    <>
      <HtmlHead title="Contact Us" />
      <main className="pt-40">
        <Heading header="Contact Us" />
        <p>
        Drop us a line and we’ll get back to you as soon as possible
        </p>

        <section>
          <div>
            <h2>Send us a message</h2>
            <div className="md:grid grid-cols-3 md:shadow-lg my-5">
              <div className="col-span-2 h-full">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="grid w-8/12 text-gray-500 mx-auto gap-7 py-14"
                >
                  {isError ? (
                    <ErrorPrompt
                      item="message"
                      msg="Unable to seng your message"
                    />
                  ) : (
                    ''
                  )}
                  {isSuccess ? <Success item="message" /> : ''}

                  <div className="flex flex-col w-full space-y-1 text-md">
                    <input
                      type="text"
                      id="name"
                      className="p-2 rounded-md border-2 border-gray-200 text-gray-500"
                      placeholder="Name: "
                      {...register('name')}
                    />

                    {errors.name && (
                      <span className="text-red-400 pt-3 font-semibold">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col w-full space-y-1 text-md">
                    <input
                      type="email"
                      id="email"
                      className="p-2 rounded-md border-2 border-gray-300 text-gray-400"
                      placeholder="Email: "
                      {...register('email')}
                    />

                    {errors.email && (
                      <span className="text-red-400 pt-3 font-semibold">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col w-full space-y-1 text-md">
                    <textarea
                      id="message"
                      className="p-2 rounded-md border-2 border-gray-300 text-gray-500"
                      placeholder="Message: "
                      rows={4}
                      {...register('message')}
                    ></textarea>

                    {errors.message && (
                      <span className="text-red-400 pt-3 font-semibold">
                        {errors.message.message}
                      </span>
                    )}
                  </div>

                  <div className="w-full">
                    {isLoading ? (
                      <button
                        type="submit"
                        className="flex items-center justify-center bg-blue-700 hover:bg-blue-900  rounded-md tracking-wider cursor-pointer px-5 py-3 w-full text-white text-lg font-semibold"
                      >
                        Sending message...
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="flex items-center justify-center bg-blue-700 hover:bg-blue-900  rounded-md tracking-wider cursor-pointer px-5 py-3 w-full text-white text-lg font-semibold"
                      >
                        Send a message
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div>
            <h3>Head Office</h3>
            <p>7 Gambo Sawaba, Gwarimpa Abuja</p>

            {socials.map((social, index) => (
              <Link key={index} href={social.link} target="_blank">
                <span>
                  {social.logo}
                  {social.name}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default Contact
