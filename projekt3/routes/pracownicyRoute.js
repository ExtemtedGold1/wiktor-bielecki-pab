import {Express, Router, Requset, Response } from 'express';
import { appendFile } from 'fs';
import route from './router';
const express = require('express');
const router = express.Router();
const pracownik = require('../models/pracownikModel');

//GET
router.get()