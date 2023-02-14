import { FormControl, MenuItem, Select, InputLabel } from '@mui/material';
import React from 'react'
import { useState, useEffect } from 'react';

const Filter = ({ data, setData }) => {
    const [search, setSearch] = useState("");
    const [rating,setRating] = useState("");
    const [price,setPrice] = useState(""); 
    useEffect(()=>{
        // data.map((rates)=>{
        //     rates.filter(rates.rating > rating);
        // })
    },[rating])
    console.log(rating);
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
                <input placeholder='Search here !' onChange={(e) => setSearch(e.target.value)} className='border-2 border-slate-300 px-4 py-2 outline-none sm:w-[320px] w-[255px]' />
                <div className='flex flex-wrap sm:mt-0 mt-2'>
                    <div>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-select-small">Rating</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                            // value={rating}
                            label="Rating"
                            onChange={(e)=>setRating(e.target.value)}
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
                            <InputLabel id="demo-select-small">Price</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                            // value={age}
                            label="Price"
                            onChange={(e)=>setPrice(e.target.value)}
                            >
                                <MenuItem >High</MenuItem>
                                <MenuItem >Intermediate</MenuItem>
                                <MenuItem >Low</MenuItem>
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