import React from 'react'
import Link from 'next/link'
import Question from "@/app/components/question"
const page = () => {
  return (
    <div className='text-center'>
      <h1 className='text-5xl italic  text-yellow-800 mb-4'>Funde</h1>
      <div className='w-[80%] mx-[10%]'>
        <h3>I obvoiusly have my funde, but all of you have funde. And you can share them through this website.So prepare youself to know more and spread you knowledge among others. Create your own answers to the questions.
        </h3>

        <div className='questions'>
          <Question Question='Is it ok  youself to know more and spread you knowledge among others. Create your own answers to the questions??' Answer='Not At all   youself to know more and spread you knowledge among others. Create your own answers to the questions'></Question>
          <Question Question='Is it ok  youself to know more and spread you knowledge among others. Create your own answers to the questions??' Answer='Not At all  youself to know more and spread you knowledge among others. Create your own answers to the questions'></Question>
          <Question Question='Is it ok  youself to know more and spread you knowledge among others. Create your own answers to the questions??' Answer='Not At all  youself to know more and spread you knowledge among others. Create your own answers to the questions'></Question>
          <Question Question='Is it ok  youself to know more and spread you knowledge among others. Create your own answers to the questions??' Answer='Not At all  youself to know more and spread you knowledge among others. Create your own answers to the questions'></Question>
        </div>
      </div>

<div className='flex justify-around'>
      <Link href="/Funde/Question"><button
        className="px-4 py-2 bg-green-900 text-white font-medium rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Submit Your Question
      </button></Link>
      <Link href="/"><button
        className="px-4 py-2 bg-green-900 text-white font-medium rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Questions to Answer
      </button></Link>
      </div>
    </div>
  )
}

export default page