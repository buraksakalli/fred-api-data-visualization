"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/_components";

export const Hero = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, transform: "translateY(-100px)" }}
        animate={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-white tracking-tighter text-center">
          Economic Insights at a Glance
        </h1>

        <p className="text-primary-white text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 text-center tracking-tight">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <motion.div
          className="space-x-4 flex items-center justify-center my-10"
          initial={{ opacity: 0, transform: "translateX(100px)" }}
          animate={{ opacity: 1, transform: "translateX(0px)" }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="#t10y2y">
            <Button>Explore T10Y2Y</Button>
          </Link>
          <Link href="#gnpca">
            <Button>Explore GNPCA</Button>
          </Link>
          <Link href="#dgs10">
            <Button>Explore DGS10</Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};
