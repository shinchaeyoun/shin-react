/* eslint-disable */
import React, { useState } from "react";

export default function useInput (){
    const [value, setValue] = useState('');
    const onChange = (e) => setValue(e.target.value);
console.log('value, onChange',value, onChange);

    return { value, onChange };
};