import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { btn_style, next_btn_style, prev_btn_style, outer_btn_style } from "../utils.variable";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import {
  Project,
  ServiceOn,
  Follow,
  MyCliet,
  Contact,
  Skill,
  SliderBtn,
  HomePage, AboutMe
} from "../export.comp";
import { projectFn } from "../../controllers/project.controller";
import { homePageFn, AboutMeFn } from "../../controllers/profile.controller";
import { followMeFn, serviceFn, myClientFn } from "../../controllers/service.controller";
import Loader from "../Loader";

export {
  React,
  useEffect,
  useState,
  useSelector,
  btn_style,
  IoIosArrowRoundBack,
  IoIosArrowRoundForward,
  Project,
  ServiceOn,
  Follow,
  Loader,
  MyCliet,
  Contact,
  Skill,
  SliderBtn,
  projectFn,
  homePageFn,
  HomePage,
  AboutMe,
  AboutMeFn,
  followMeFn,
  serviceFn,
  myClientFn,
  next_btn_style,
  prev_btn_style,
  outer_btn_style

};
