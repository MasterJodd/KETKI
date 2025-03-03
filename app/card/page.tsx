"use client";
import "./style.css";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ketki } from "@/images/main";
import Strips from "../components/strips";
import Link from "next/link";

export default function Card() {
  return (
    <section className="page bg-pink-200">
      <Strips />
      <div className="birthdayCard">
        <div className="cardFront ">
          <section className=" w-[300px] h-[500px]  flex items-center justify-center text-center space-y-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className=" front px-7 h-[70vh] shadow-2xl space-y-10 max-w-2xl w-full"
            >
              <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-2xl -y-10 mt-10 font-extrabold text-pink-200 mb-4 drop-shadow-md"
              >
                Happy Birthday!
              </motion.h1>

              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                className="text-3xl text-pink-200 font-extrabold"
              >
                JAANU
              </motion.span>

              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="flex justify-center "
              >
                <Image
                  src={ketki}
                  alt="bdaygirl"
                  height={400}
                  className="rounded-full"
                  priority
                />
              </motion.div>

              <div className="">
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-pink-200 text-gray-500 px-3 text-sm py-3 font-extrabold rounded-full text hover:bg-pink-500 transition transform hover:scale-105 shadow-lg"
                  // onClick={() => alert("🎉 Have an amazing birthday! 🎉")}
                >
                  Tap here
                </motion.button>
              </div>
            </motion.div>
          </section>
        </div>
        <div className="cardInside">
          <div className="happy">
            <p className="text-base px-2 pt-4 mb-10" id="msg">
            Happy Birthday to the most amazing person! 💖 I hope your day is as beautiful, special, and magical as you are. You deserve all the happiness, laughter, and love in the world today and always. May this year bring you endless joy, unforgettable memories, and everything your heart desires. 💐✨ Have the best day ever, and keep shining like the star you are!
            </p>
            <Link href="/open" className="px-6 py-2 bg-pink-200 text-gray-800 font-semibold rounded-md shadow-md hover:bg-gray-100">
            Tap Here
            </Link>
          </div>
        </div>
      </div>
      {/* <Balloon /> */}
    </section>
  );
}
