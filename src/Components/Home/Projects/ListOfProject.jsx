import React, {useEffect, useState} from 'react';
import {BsCash} from "react-icons/bs";
import {GiCash} from "react-icons/gi";
import ProgressBar from "react-bootstrap/ProgressBar";
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import {prefixer} from 'stylis';
import axios from "axios";
import {PaginationControl} from 'react-bootstrap-pagination-control';
import {SeparateNumber} from "../../../helper/SeparateNumber";
import {EnglishToPersian} from "../../../helper/EnglishToPersian";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select';
import HalaFund from "./Companies/HalaFund";
import Hamafarin from "./Companies/Hamafarin";

function ListOfProject() {

    const [companies, setCompanies] = React.useState('halafund');

    const handleChange = (event) => {
        setCompanies(event.target.value);
    };

    return (
        <>
            <div className="container mt-5">
                <div className="md:px-20 w-[90%] md:w-[40%] ">
                    <FormControl sx={{m: 1, width:"100%"}}>
                        <InputLabel id="demo-simple-select-autowidth-label">شركت ها</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-multiple-name"
                            value={companies}
                            onChange={handleChange}
                            label="شركت ها"
                        >
                            <MenuItem key="halafund" value="halafund">
                                حلال فاند
                            </MenuItem>
                            <MenuItem key="hamafarin" value="hamafarin">
                                هم آفرين
                            </MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div>
                    {
                        companies === "halafund" ? (
                            <HalaFund/>
                        ) : (
                            <Hamafarin/>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default ListOfProject