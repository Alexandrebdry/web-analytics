import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const Heatmap = ({ data }) => {
    const ref = useRef();

    useEffect(() => {
        const svg = d3
            .select(ref.current)
            .attr("width", window.innerWidth)
            .attr("height", window.innerHeight);

        const colorScale = d3
            .scaleLinear()
            .domain([0, d3.max(data, (d) => d.value)])
            .range(["#8FBC8F", "#006400"]);

        svg.selectAll("circle")
            .data(data)
            .join("circle")
            .attr("cx", (d) => d.x)
            .attr("cy", (d) => d.y)
            .attr("r", (d) => d.value * 3)
            .style("fill", (d) => colorScale(d.value));
    }, [data]);
    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <svg ref={ref} />
            </div>
        </div>
    );
};

export default Heatmap;
