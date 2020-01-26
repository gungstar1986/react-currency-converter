import React from "react";

export const withFilter = (Component) => ({region, city, data, ...props}) => {
    const filtered = region && city
        ? data.filter(item => item.id === region || item.regionId === city && item)
        : data;

    return <Component data={filtered} {...props}/>
};

