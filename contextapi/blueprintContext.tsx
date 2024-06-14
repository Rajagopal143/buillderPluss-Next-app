"use client"
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";



const BlueprintContext = createContext<object | any>({});


export const BlueprintProvider = ({ children }: { children: ReactNode }) => {

    const [blueprintData, setBluePrintData] = useState<Object>({
      floorplan: {
        version: "0.0.2a",
        corners: {
          "71d4f128-ae80-3d58-9bd2-711c6ce6cdf2": {
            x: -4.917,
            y: -0.02,
            elevation: 4,
          },
          "f90da5e3-9e0e-eba7-173d-eb0b071e838e": {
            x: -4.917,
            y: 4.98,
            elevation: 4,
          },
          "2df5a92c-732d-41c5-13ec-db668de5bcc3": {
            x: 1.139,
            y: 4.992,
            elevation: 4,
          },
          "e11266bf-ab69-4fb4-5372-2b5cfed8d4be": {
            x: 1.139,
            y: -0.008,
            elevation: 4,
          },
        },
        walls: [
          {
            corner1: "71d4f128-ae80-3d58-9bd2-711c6ce6cdf2",
            corner2: "f90da5e3-9e0e-eba7-173d-eb0b071e838e",
            frontTexture: {
              url: "rooms/textures/wallmap.png",
              stretch: true,
              scale: 0,
            },
            backTexture: {
              url: "rooms/textures/wallmap.png",
              stretch: true,
              scale: 0,
            },
            wallType: "STRAIGHT",
            a: { x: -176.77669529663686, y: 176.7766952966369 },
            b: { x: -176.7766952966369, y: 323.22330470336317 },
            length: "5m",
          },
          {
            corner1: "f90da5e3-9e0e-eba7-173d-eb0b071e838e",
            corner2: "2df5a92c-732d-41c5-13ec-db668de5bcc3",
            frontTexture: {
              url: "rooms/textures/wallmap.png",
              stretch: true,
              scale: 0,
            },
            backTexture: {
              url: "rooms/textures/wallmap.png",
              stretch: true,
              scale: 0,
            },
            wallType: "STRAIGHT",
            a: { x: 176.7766952966369, y: 676.7766952966368 },
            b: { x: 323.22330470336317, y: 676.776695296637 },
            length: "6.056m",
          },
          {
            corner1: "e11266bf-ab69-4fb4-5372-2b5cfed8d4be",
            corner2: "71d4f128-ae80-3d58-9bd2-711c6ce6cdf2",
            frontTexture: {
              url: "rooms/textures/wallmap.png",
              stretch: true,
              scale: 0,
            },
            backTexture: {
              url: "rooms/textures/wallmap.png",
              stretch: true,
              scale: 0,
            },
            wallType: "STRAIGHT",
            a: { x: -99.87409568144594, y: -215.44577100512734 },
            b: { x: -277.2502289948728, y: -215.76209568144594 },
            length: "6.056m",
          },
          {
            corner1: "e11266bf-ab69-4fb4-5372-2b5cfed8d4be",
            corner2: "2df5a92c-732d-41c5-13ec-db668de5bcc3",
            frontTexture: {
              url: "rooms/textures/wallmap.png",
              stretch: true,
              scale: 0,
            },
            backTexture: {
              url: "rooms/textures/wallmap.png",
              stretch: true,
              scale: 0,
            },
            wallType: "STRAIGHT",
            a: { x: -63.537331031433695, y: 176.60182428228904 },
            b: { x: -63.537331031433695, y: 323.5589984808746 },
            length: "5m",
          },
        ],
        rooms: {
          "71d4f128-ae80-3d58-9bd2-711c6ce6cdf2,e11266bf-ab69-4fb4-5372-2b5cfed8d4be,2df5a92c-732d-41c5-13ec-db668de5bcc3,f90da5e3-9e0e-eba7-173d-eb0b071e838e":
            { roomDetails: {}, name: "A New Room", area: "30.28m²" },
        },
        wallTextures: [],
        floorTextures: {},
        newFloorTextures: {
          "2df5a92c-732d-41c5-13ec-db668de5bcc3,71d4f128-ae80-3d58-9bd2-711c6ce6cdf2,e11266bf-ab69-4fb4-5372-2b5cfed8d4be,f90da5e3-9e0e-eba7-173d-eb0b071e838e":
            { url: "rooms/textures/light_fine_wood.jpg", scale: 300 },
        },
        carbonSheet: {
          url: "",
          transparency: 1,
          x: 0,
          y: 0,
          anchorX: 0,
          anchorY: 0,
          width: 0.01,
          height: 0.01,
        },
      },
      items: [
        {
          item_name: "Chair",
          item_type: 1,
          model_url: "models/js/gus-churchchair-whiteoak.js",
          xpos: -169.34220455316643,
          ypos: 39.47743068655714,
          zpos: 248.98399999999978,
          rotation: 0,
          scale_x: 1,
          scale_y: 1,
          scale_z: 1,
          fixed: false,
          material_colors: [
            "#ffffff",
            "#cccccc",
            "#ffffff",
            "#ffffff",
            "#cccccc",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#ffffff",
          ],
        },
        {
          item_name: "Bathroommirror",
          item_type: 2,
          format: "gltf",
          model_url: "models/gltf/bathroomMirror.glb",
          xpos: -0.10061464832210731,
          ypos: 292.37268804460075,
          zpos: 25.635391970287387,
          rotation: -0.001981503351151548,
          scale_x: 300,
          scale_y: 300,
          scale_z: 300,
          fixed: false,
          material_colors: ["#e49964", "#bcd1d6", "#b2d3c4"],
        },
        {
          item_name: "Cardboardboxclosed",
          item_type: 0,
          format: "gltf",
          model_url: "models/gltf/cardboardBoxClosed.glb",
          xpos: -417.0488072685888,
          ypos: -489.8568604552362,
          zpos: 0,
          rotation: -1.5707963267948966,
          scale_x: 300,
          scale_y: 300,
          scale_z: 300,
          fixed: false,
          material_colors: ["#e49964", "#ac744c"],
        },
        {
          item_name: "Window",
          item_type: 3,
          model_url: "models/js/whitewindow.js",
          xpos: -491.24400000000014,
          ypos: 220.90628908126178,
          zpos: 420.2891901865779,
          rotation: 1.5707963267948966,
          scale_x: 1,
          scale_y: 1,
          scale_z: 1,
          fixed: false,
          material_colors: [
            "#ffffff",
            "#a09050",
            "#a09050",
            "#ffffff",
            "#ffffff",
            "#6c6c6c",
            "#000000",
            "#000000",
            "#ffffff",
            "#ffffff",
            "#6c6c6c",
            "#ffffff",
          ],
        },
        {
          item_name: "Doorwayfront",
          item_type: 3,
          format: "gltf",
          model_url: "models/gltf/doorwayFront.glb",
          xpos: 113.4,
          ypos: 152.4297604560852,
          zpos: 78.09009803041106,
          rotation: -1.5707963267948966,
          scale_x: 300,
          scale_y: 300,
          scale_z: 300,
          fixed: false,
          material_colors: ["#f7ffff", "#bcd1d6", "#4e6363", "#b2d3c4"],
        },
        {
          item_name: "Open Door",
          item_type: 7,
          model_url: "models/js/open_door.js",
          xpos: -434.14069123932444,
          ypos: 110.800000297771,
          zpos: -1.4139746181979906,
          rotation: -0.001981503351151548,
          scale_x: 1,
          scale_y: 1,
          scale_z: 1,
          fixed: false,
          material_colors: ["#ffffff"],
        },
        {
          item_name: "Blue Rug",
          item_type: 8,
          model_url: "models/js/cb-blue-block-60x96.js",
          xpos: -118.21127941293042,
          ypos: 0.250005,
          zpos: 352.24266342907254,
          rotation: 0,
          scale_x: 1,
          scale_y: 1,
          scale_z: 1,
          fixed: false,
          material_colors: ["#ffffff"],
        },
        {
          item_name: "Media Console - White",
          item_type: 9,
          model_url: "models/js/cb-clapboard_baked.js",
          xpos: -461.3440000000001,
          ypos: 67.89999754396,
          zpos: 239.29133343170528,
          rotation: 1.5707963267948966,
          scale_x: 1,
          scale_y: 1,
          scale_z: 1,
          fixed: false,
          material_colors: ["#ffffff"],
        },
        {
          item_name: "Ceilingfan",
          item_type: 4,
          format: "gltf",
          model_url: "models/gltf/ceilingFan.gltf",
          xpos: -168.58566096820027,
          ypos: 400,
          zpos: 319.6720113306343,
          rotation: 0,
          scale_x: 1,
          scale_y: 1,
          scale_z: 1,
          fixed: false,
          material_colors: ["#effaf4", "#ffe996", "#e49964"],
        },
      ],
      vertices: [
        [
          { x: -486.70001220703125, y: 493.0098876953125, z: 0 },
          { x: -486.70001220703125, y: 3.0099172592163086, z: 0 },
          { x: -496.70001220703125, y: -7.009917259216309, z: 0 },
          { x: -496.70001220703125, y: 502.9901123046875, z: 0 },
        ],
        [
          { x: 108.9000015258789, y: 494.1900939941406, z: 0 },
          { x: -486.70001220703125, y: 493.0098876953125, z: 0 },
          { x: -496.70001220703125, y: 502.9901123046875, z: 0 },
          { x: 118.9000015258789, y: 504.2099304199219, z: 0 },
        ],
        [
          { x: -486.70001220703125, y: 3.0099172592163086, z: 0 },
          { x: 108.9000015258789, y: 4.1901021003723145, z: 0 },
          { x: 118.9000015258789, y: -5.790102481842041, z: 0 },
          { x: -496.70001220703125, y: -7.009917259216309, z: 0 },
        ],
        [
          { x: 108.9000015258789, y: 4.1901021003723145, z: 0 },
          { x: 108.9000015258789, y: 494.1900939941406, z: 0 },
          { x: 118.9000015258789, y: 504.2099304199219, z: 0 },
          { x: 118.9000015258789, y: -5.790102481842041, z: 0 },
        ],
      ],
    });
    const updateItemModelUrl = (itemType:Number=8, newModelUrl:string) => {
      setBluePrintData((prevData:Object|any) => {
        const updatedItems = prevData.items.map((item:Object|any) =>
          item.item_type === itemType
            ? { ...item, model_url: newModelUrl }
            : item
          );
          return { ...prevData, items: updatedItems };
        });
    };
      return (
        <BlueprintContext.Provider
          value={{ blueprintData, updateItemModelUrl }}>
          {children}
        </BlueprintContext.Provider>
      );
};

export function useBlueprintContext() {
    return useContext(BlueprintContext);
}

