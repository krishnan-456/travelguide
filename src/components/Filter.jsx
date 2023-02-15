import { FormControl, MenuItem, Select, InputLabel, TextField, MenuList } from '@mui/material';
import React from 'react'
import { useState, useEffect } from 'react';

const Filter = ({ data, setData }) => {
    const [search, setSearch] = useState("");
    const [rating, setRating] = useState("");
    const [distance, setDistance] = useState("");
    useEffect(() => {
        let arr=[];
        data.map((single) => {
            if (single.distance_string < distance) {
                arr.push(single)
            }
        })
        setData(arr);
    }, [distance])
    useEffect(() => {
        let arr=[];
        data.map((single) => {
            if (single.rating > rating) {
                arr.push(single)
            }
        })
        setData(arr);
    }, [rating])
    // console.log(rating);
    useEffect(() => {
        let arr = [];
        data.map((single) => {
            if (single.name.includes(search)) {
                arr.push(single)
            }
        })
        setData(arr);

    }, [search])

    const renderSearchForm = () => {
        return (
            <div className='w-full h-20 flex items-center justify-evenly sm:flex-row flex-col mt-10'>
                <TextField id="outlined-basic" label="Search here" variant="outlined" sx={{ m: 1, minWidth: 260 }} size="small" onChange={(e) => setSearch(e.target.value)}/>
                {/* <input placeholder='Search here!' onChange={(e) => setSearch(e.target.value)} className='border-2 border-slate-300 px-4 py-2 outline-none sm:w-[320px] w-[255px] rounded placeholder:text-black' /> */}
                <div className='flex flex-wrap sm:mt-0 mt-2'>
                    <div>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-select-small">Rating</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                // value={rating}
                                label="Rating"
                                onChange={(e) => setRating(e.target.value)}
                            >
                                <MenuItem value={0}>All</MenuItem>
                                <MenuItem value={4.5}>Above 4.5</MenuItem>
                                <MenuItem value={4.0}>Above 4</MenuItem>
                                <MenuItem value={3.5}>Above 3.5</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-select-small">Distance</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                // value={age}
                                label="Distance"
                                onChange={(e) => setDistance(e.target.value)}
                            >
                                <MenuItem value={"8"}>All</MenuItem>
                                <MenuItem value={"1"}>Less than 1 Km</MenuItem>
                                {/* <MenuItem>Less than 1.5 Km</MenuItem> */}
                                <MenuItem value={"2"}>Less than 2 Km</MenuItem>
                                <MenuItem value={"3"}>Less than 3 Km</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            {renderSearchForm()}
        </div>
    )
}
export default Filter;