import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = () => {
  return (
    <ComposableMap
      height={430}
      projectionConfig={{ scale: 120 }}
      projection="geoConicEqualArea"
    >
      <Sphere fill="#ECEFF1" stroke="#ECEFF1" strokeWidth={1} />
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#cccccc"
              stroke="#ffffff"
              strokeWidth="0.37"
            />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-118, 33]}
        dx={-20}
        dy={0}
        connectorProps={{
          stroke: "#7a7a7a",
          strokeWidth: 1,
          strokeLinecap: "round",
        }}
      >
        <text
          x="-4"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="#000000"
          fontSize="13"
        >
          {"Los Angeles"}
        </text>
      </Annotation>
      <Annotation
        subject={[-122.4, 37.8]}
        dx={-20}
        dy={-10}
        connectorProps={{
          stroke: "#7a7a7a",
          strokeWidth: 1,
          strokeLinecap: "round",
        }}
      >
        <text
          x="-4"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="#000000"
          fontSize="13"
        >
          {"San Francisco"}
        </text>
      </Annotation>
      <Annotation
        subject={[-76, 44]}
        dx={0}
        dy={-32}
        connectorProps={{
          stroke: "#7a7a7a",
          strokeWidth: 1,
          strokeLinecap: "round",
        }}
      >
        <text
          x="0"
          y="-5"
          textAnchor="middle"
          alignmentBaseline="middle"
          fill="#000000"
          fontSize="13"
        >
          {"Watertown"}
        </text>
      </Annotation>
      <Annotation
        subject={[-74, 42]}
        dx={20}
        dy={-22}
        connectorProps={{
          stroke: "#7a7a7a",
          strokeWidth: 1,
          strokeLinecap: "round",
        }}
      >
        <text
          x="4"
          textAnchor="start"
          alignmentBaseline="middle"
          fill="#000000"
          fontSize="13"
        >
          {"West Point"}
        </text>
      </Annotation>
      <Annotation
        subject={[-74, 40.5]}
        dx={20}
        dy={-4}
        connectorProps={{
          stroke: "#7a7a7a",
          strokeWidth: 1,
          strokeLinecap: "round",
        }}
      >
        <text
          x="4"
          textAnchor="start"
          alignmentBaseline="middle"
          fill="#000000"
          fontSize="13"
        >
          {"NYC"}
        </text>
      </Annotation>
      <Annotation
        subject={[-75, 40]}
        dx={20}
        dy={13}
        connectorProps={{
          stroke: "#7a7a7a",
          strokeWidth: 1,
          strokeLinecap: "round",
        }}
      >
        <text
          x="4"
          textAnchor="start"
          alignmentBaseline="middle"
          fill="#000000"
          fontSize="13"
        >
          {"Philadelphia"}
        </text>
      </Annotation>
      <Annotation
        subject={[-77, 38.7]}
        dx={5}
        dy={30}
        connectorProps={{
          stroke: "#7a7a7a",
          strokeWidth: 1,
          strokeLinecap: "round",
        }}
      >
        <text
          x="4"
          textAnchor="start"
          alignmentBaseline="middle"
          fill="#000000"
          fontSize="13"
        >
          {"Washington, DC"}
        </text>
      </Annotation>
      <Annotation
        subject={[-84, 32]}
        dx={0}
        dy={32}
        connectorProps={{
          stroke: "#7a7a7a",
          strokeWidth: 1,
          strokeLinecap: "round",
        }}
      >
        <text
          x="0"
          y="5"
          textAnchor="middle"
          alignmentBaseline="middle"
          fill="#000000"
          fontSize="13"
        >
          {"Columbus"}
        </text>
      </Annotation>
      <Annotation
        subject={[67, 32]}
        dx={20}
        dy={-15}
        connectorProps={{
          stroke: "#7a7a7a",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text
          x="4"
          textAnchor="start"
          alignmentBaseline="middle"
          fill="#000000"
          fontSize="13"
        >
          {"Afghanistan"}
        </text>
      </Annotation>
      <Annotation
        subject={[146, -37]}
        dx={-20}
        dy={-20}
        connectorProps={{
          stroke: "#7a7a7a",
          strokeWidth: 1,
          strokeLinecap: "round",
        }}
      >
        <text
          x="-4"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="#000000"
          fontSize="13"
        >
          {"Australia"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
