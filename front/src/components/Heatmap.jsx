import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const Heatmap = ({ data, width = 600, height = 400 }) => {
    const ref = useRef();

    useEffect(() => {
        const svg = d3.select(ref.current)
            .attr("width", width)
            .attr("height", height);
          
        const colorScale = d3
            .scaleLinear()
            .domain([0, d3.max(data, (d) => d.value)])
            .range(["#570DF820", "#570DF820"]);
    
        const xScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.x)])
            .range([0, width]);
    
        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.y)])
            .range([0, height]);
    
        svg.selectAll("circle")
            .data(data)
            .join("circle")
            .attr("cx", (d) => xScale(d.x))
            .attr("cy", (d) => yScale(d.y))
            .attr("r", (d) => d.value * 3)
            .attr("fill", (d) => colorScale(d.value));
    
    }, [data, height, width]);
    
    return (
        <svg ref={ref}/>
    );
};

export default Heatmap;
