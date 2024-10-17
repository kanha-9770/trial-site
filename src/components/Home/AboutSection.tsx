"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import AnimatedText from "../ui/AnimatedText"
import styles from "../ui/AnimatedText.module.css"
import data from "../Constants/hero.json"

// Define interfaces for the expected props
interface Stats {
  machinesSold: number
  readyStockMachines: number
}

interface Card {
  image: string
  title: string
  link: string
}

interface AboutUsProps {
  title: string
  heading: string
  description: string
  stats: Stats
  leftstats: string
  rightstats: string
  readmore: string
  cards: Card[]
}

const AboutUs: React.FC = () => {
  const aboutData: AboutUsProps | undefined = data.find(
    (item) => item.category === "homeaboutsection"
  )?.data as AboutUsProps

  const [machinesSold, setMachinesSold] = useState(0)
  const [readyStockMachines, setReadyStockMachines] = useState(0)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!aboutData) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(setMachinesSold, aboutData.stats.machinesSold)
            animateCount(setReadyStockMachines, aboutData.stats.readyStockMachines)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [aboutData])

  const animateCount = (setter: React.Dispatch<React.SetStateAction<number>>, endValue: number) => {
    let startTime: number
    const duration = 1500 // 1.5 seconds

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setter(Math.floor(progress * endValue))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }

    window.requestAnimationFrame(step)
  }

  if (!aboutData) return null

  return (
    <div className="flex mt-12 h-full max-w-screen-2xl mx-auto flex-col items-center md:px-6 lg:px-8">
      <h2 className="text-3xl font-medium text-[#483d78] flex justify-center">
        <span className="lg:text-3xl text-[1.8rem] bg-gradient-to-r from-[#483d73] to-red-700 bg-clip-text text-transparent font-medium">
          {aboutData.title.trim().replace(/\s+\S+$/, "")}
        </span>
        <span className="lg:text-3xl text-[1.8rem] bg-gradient-to-r from-[#483d73] to-red-700 bg-clip-text text-transparent font-semibold ml-2">
          {aboutData.title.trim().match(/\S+$/)}
        </span>
      </h2>

      <h2 className="text-lg lg:text-4xl w-full text-center font-poppins lg:px-72 py-3">
        {aboutData.heading.split(" ").map((word, index) => (
          <span
            key={index}
            className={word === "Machine" ? "text-[#483d78] cursor-pointer" : ""}
          >
            {word}{" "}
          </span>
        ))}
      </h2>

      <div className="text-center flex flex-col w-full lg:max-w-6xl">
        <p className="font-poppins flex lg:hidden text-sm lg:text-base font-light py-4 text-center w-full lg:w-3/5 leading-6">
          {aboutData.description}
        </p>
        <div ref={statsRef} className="flex flex-row justify-between items-center w-full mt-4">
          <div className="lg:text-center w-[50%] lg:w-1/5 md:mb-0">
            <h2 className="text-xl lg:text-3xl font-bold text-[#483d73]">{machinesSold}</h2>
            <p className="text-sm lg:text-base font-regular font-poppins">{aboutData.leftstats}</p>
          </div>
          <p className="font-poppins hidden lg:flex text-sm lg:text-sm md:px-6 py-4 text-center font-regular w-full md:w-3/5 leading-6">
            {aboutData.description}
          </p>
          <div className="lg:text-center flex flex-col justify-end w-[50%] lg:w-1/5 md:mt-0">
            <h2 className="text-xl lg:text-3xl font-bold text-[#483d73]">{readyStockMachines}</h2>
            <p className="lg:text-base font-regular text-sm font-poppins">{aboutData.rightstats}</p>
          </div>
        </div>

        <Link
          href={`/about`}
          className="text-[#483d73] text-center font-poppins text-base hover:font-semibold mt-4"
        >
          {aboutData.readmore}
        </Link>
      </div>

      <div className="flex flex-col md:flex-row w-full items-end gap-4 mt-8">
        {aboutData.cards.map((card, index) => (
          <Link
            key={index}
            className={`relative w-full lg:w-1/3 group flex flex-col items-center ${
              index === 1 ? "z-10 lg:w-[40%]" : ""
            }`}
            href={`/about/${card.link}`}
          >
            <div className="w-full">
              <div
                className={`relative overflow-hidden rounded-md transition-transform transform group-hover:scale-95 ${
                  index === 1 ? "h-58" : "h-52"
                }`}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={600}
                  height={250}
                  className={`w-full rounded-2xl border-2 object-cover ${
                    index === 1 ? "h-[15rem] lg:w-full w-full md:w-full" : "h-52"
                  }`}
                />
                <div className="absolute bottom-0 left-0 p-4 flex justify-between items-end w-full">
                  <Link
                    href={card.link}
                    className="text-white flex items-end text-base font-regular"
                  >
                    <div className={styles.container}>
                      <div className={styles.box}>
                        <div className={styles.title}>
                          <span className={styles.block}></span>
                          <AnimatedText text={`${card.title}`} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AboutUs