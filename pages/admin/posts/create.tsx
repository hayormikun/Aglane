import { SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useMutation } from 'react-query'
import { Success } from '../../../components/Success'
import { ErrorPrompt } from '../../../components/ErrorPrompt'
import { HtmlHead } from '../../../components/Head'
import Link from 'next/link'
import { Heading } from '../../../components/Heading'

type FormValues = {
  description: string
  roleOverview: string
  responsibilities: string
  requirements: string
  benefits: string
}

const schema = yup.object().shape({
  description: yup.string().required('Please enter role description here'),
  roleOverview: yup.string().required('Please enter role overview here'),
  responsibilities: yup.string().required('Please enter roles and responsibilities here'),
  requirements: yup.string().required('Please enter requirements here'),
  benefits: yup.string().required('Please enter role benefits here'),
})

type FormInputs = yup.InferType<typeof schema>

const submitForm = async (data: FormValues): Promise<FormValues> => {
  return await axios.post(`${process.env.BASE_URL}/opening`, data)
}

const Create = () => {
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
      <HtmlHead title="Add Opening" />
      <main
        className="pt-40 px-[3.125em] mb-0 w-full h-full pb-12"
        id="contact"
      >
        <div className="md:w-[80%] mx-auto">
        <h1 className="text-3xl mx-auto pb-3 border-b-4 border-white font-montserrat font-semibold text-white uppercase w-full mb-[1.875rem]">
          Create Post
        </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full text-white mx-auto flex flex-col gap-8"
          >
            {isError ? (
              <ErrorPrompt item="message" msg="Unable to send your message" />
            ) : (
              ''
            )}
            {isSuccess ? <Success item="message" /> : ''}

            <div className="flex flex-col gap-y-3">
              <div className="form_comment_field w-full border border-[#D5D5D5] rounded-[0.625rem] flex">
                <textarea
                  id="description"
                  autoComplete="off"
                  className="form__input font-normal font-quickSand"
                  placeholder=" "
                  {...register('description')}
                ></textarea>
                <label
                  htmlFor="description"
                  className="form__label text-sm md:text-xl font-medium font-quickSand"
                >
                  Description
                </label>
              </div>
              {errors.description && (
                <span className="text-red-500 text-sm md:text-xl font-quickSand font-bold">
                  {errors.description.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-y-3">
              <div className="form_comment_field w-full border border-[#D5D5D5] rounded-[0.625rem] flex">
                <textarea
                  id="roleOverview"
                  autoComplete="off"
                  className="form__input font-normal font-quickSand"
                  placeholder=" "
                  {...register('roleOverview')}
                ></textarea>
                <label
                  htmlFor="roleOverview"
                  className="form__label text-sm md:text-xl font-medium font-quickSand"
                >
                  Role Overview
                </label>
              </div>
              {errors.roleOverview && (
                <span className="text-red-500 text-sm md:text-xl font-quickSand font-bold">
                  {errors.roleOverview.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-y-3">
              <div className="form_comment_field w-full border border-[#D5D5D5] rounded-[0.625rem] flex">
                <textarea
                  id="responsibilities"
                  autoComplete="off"
                  className="form__input font-normal font-quickSand"
                  placeholder=" "
                  {...register('responsibilities')}
                ></textarea>
                <label
                  htmlFor="responsibilities"
                  className="form__label text-sm md:text-xl font-medium font-quickSand"
                >
                  Roles and Responsibilites
                </label>
              </div>
              {errors.responsibilities && (
                <span className="text-red-500 text-sm md:text-xl font-quickSand font-bold">
                  {errors.responsibilities.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-y-3">
              <div className="form_comment_field w-full border border-[#D5D5D5] rounded-[0.625rem] flex">
                <textarea
                  id="requirements"
                  autoComplete="off"
                  className="form__input font-normal font-quickSand"
                  placeholder=" "
                  {...register('requirements')}
                ></textarea>
                <label
                  htmlFor="requirements"
                  className="form__label text-sm md:text-xl font-medium font-quickSand"
                >
                  Requirements
                </label>
              </div>
              {errors.requirements && (
                <span className="text-red-500 text-sm md:text-xl font-quickSand font-bold">
                  {errors.requirements.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-y-3">
              <div className="form_comment_field w-full border border-[#D5D5D5] rounded-[0.625rem] flex">
                <textarea
                  id="benefits"
                  autoComplete="off"
                  className="form__input font-normal font-quickSand"
                  placeholder=" "
                  {...register('benefits')}
                ></textarea>
                <label
                  htmlFor="benefits"
                  className="form__label text-sm md:text-xl font-medium font-quickSand"
                >
                  Benefits
                </label>
              </div>
              {errors.benefits && (
                <span className="text-red-500 text-sm md:text-xl font-quickSand font-bold">
                  {errors.benefits.message}
                </span>
              )}
            </div>

            <div className="w-full">
              {isLoading ? (
                <button
                  type="submit"
                  className="flex items-center shadow-lg justify-center bg-[#428821] hover:bg-[#346c1a] outline-none rounded-md tracking-wider cursor-pointer px-5 py-3 w-full text-white text-lg font-medium"
                >
                  Creating Opening...
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex flex-row gap-x-4 items-center shadow-lg justify-center bg-[#428821] hover:bg-[#346c1a] outline-none rounded-md tracking-wider cursor-pointer px-5 py-3 w-full text-white text-lg font-medium"
                >
                  <span>Create Opening</span>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_397_639)">
                      <path
                        d="M28.9 12.3875L24.0625 7.5C23.9463 7.38284 23.808 7.28985 23.6557 7.22639C23.5034 7.16293 23.34 7.13025 23.175 7.13025C23.01 7.13025 22.8466 7.16293 22.6943 7.22639C22.542 7.28985 22.4037 7.38284 22.2875 7.5C22.1703 7.61621 22.0773 7.75446 22.0139 7.90678C21.9504 8.05911 21.9178 8.22249 21.9178 8.3875C21.9178 8.55252 21.9504 8.7159 22.0139 8.86822C22.0773 9.02055 22.1703 9.1588 22.2875 9.275L26.7375 13.75H1.25C0.918477 13.75 0.600533 13.8817 0.366113 14.1161C0.131692 14.3505 -2.62229e-06 14.6685 -2.62229e-06 15C-2.62229e-06 15.3315 0.131692 15.6495 0.366113 15.8839C0.600533 16.1183 0.918477 16.25 1.25 16.25H26.8125L22.2875 20.775C22.0659 21.0075 21.9423 21.3163 21.9423 21.6375C21.9423 21.9587 22.0659 22.2675 22.2875 22.5C22.4037 22.6172 22.542 22.7102 22.6943 22.7736C22.8466 22.8371 23.01 22.8698 23.175 22.8698C23.34 22.8698 23.5034 22.8371 23.6557 22.7736C23.808 22.7102 23.9463 22.6172 24.0625 22.5L28.9 17.6875C29.6023 16.9844 29.9967 16.0313 29.9967 15.0375C29.9967 14.0437 29.6023 13.0906 28.9 12.3875Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_397_639">
                        <rect
                          width="30"
                          height="30"
                          fill="white"
                          transform="matrix(-1 0 0 -1 30 30)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              )}
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default Create
