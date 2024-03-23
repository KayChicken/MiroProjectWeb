import { LayerType, TextLayer } from "@/lib/types";
import React, { useState } from "react"
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable'
import { useMutation } from "../../../../../liveblocks.config";

type Props = {
    id: string;
    layer: TextLayer;
    onPointerDown: (e: React.PointerEvent, id: string) => void;
    selectionColor?: string;
};




const Text = ({ id, layer, onPointerDown, selectionColor }: Props) => {

    let { x, y, value, height, width, fill } = layer


    const onChange = useMutation(
        ({ storage }, text: string) => {
            const liveLayers = storage.get("layers");
            const layer = liveLayers.get(id);
            layer?.set("value", text)
        },
        []
    )

    const handleChange = (e: ContentEditableEvent) => {
        onChange(e.target.value)
    }




    return (
        <foreignObject height={height} width={width} onPointerDown={(e) => onPointerDown(e, id)}
            style={{

                transform: `translate(${x}px, ${y}px)`,
            }}>
            <ContentEditable className="w-full h-full" html={value || ''} onChange={handleChange} />
        </foreignObject>
    )

}


export default Text