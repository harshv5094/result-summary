'use client'
import data from '@/lib/data.json'
import Image from 'next/image'
import { useRef } from 'react'

export default function Home() {
  const result = useRef(data)
  return (
    <main className="absolute top-[16em] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <article className="grid grid-cols-none md:grid-cols-2 grid-rows-2 md:grid-rows-none w-[20em] md:w-[35em] h-[30em] md:h-[26em]">
        <div className="z-50 md:w-[20em] h-[22em] md:h-full bg-gradient-to-t from-lightRoyalBlue to-lightSlateBlue text-white rounded-3xl text-center">
          <section className="text-2xl mt-5 md:mt-8 text-paleBlue">
            Your Result
          </section>
          <section className="flex justify-center mt-4">
            <div className="rounded-full size-40 text-center bg-gradient-to-bl from-violetBlue to-persianBlue">
              <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-paleBlue">
                <div className="text-5xl text-white">76</div>of 100
              </div>
            </div>
          </section>

          <section className="text-center mt-3">
            <span className="text-2xl md:text-3xl">Great</span>
            <br />
            <p className="text-sm md:text-base mt-0 md:mt-2 mx-4 md:mx-8 text-paleBlue">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </section>
        </div>
        <div className="-z-10 bg-white pl-0 pt-28 md:pt-0 md:pl-12 w-full md:w-[21em] h-[25em] md:h-full rounded-3xl p-5">
          <section className="font-bold p-5 text-2xl">Summary</section>
          {result.current.map((item, index) => {
            return (
              <section
                key={index}
                className={`flex justify-between m-5 roundex-xl `}
              >
                <div className="flex justify-start text-lg gap-2">
                  <Image
                    src={`${item.icon}`}
                    width={20}
                    height={20}
                    alt={`${item.category} icon`}
                  />
                  <h1 className={`${item.color}`}>{item.category}</h1>
                </div>
              </section>
            )
          })}
        </div>
      </article>
    </main>
  )
}
