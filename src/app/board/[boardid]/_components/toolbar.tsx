import { Skeleton } from "@/components/ui/skeleton"
import ToolButton from "./tool-button"
import { Circle, CircleEllipsis, MousePointer2, Pen, Redo, Square, StickyNote, Text, Type, Undo } from "lucide-react"
import { CanvasMode, CanvasState, LayerType } from "@/lib/types";


type Props = {
    canvasState: CanvasState;
    setCanvasState: (newState: CanvasState) => void;
    undo: () => void;
    redo: () => void;
    canUndo: boolean;
    canRedo: boolean;
};


export const Toolbar = ({ canvasState, setCanvasState, undo, redo, canUndo, canRedo }: Props) => {



    return (
        <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4">
            <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
                <div>
                    <ToolButton
                        label="Select"
                        icon={MousePointer2}
                        isActive={
                            canvasState.mode === CanvasMode.None ||
                            canvasState.mode === CanvasMode.Translating ||
                            canvasState.mode === CanvasMode.SelectionNet ||
                            canvasState.mode === CanvasMode.Pressing ||
                            canvasState.mode === CanvasMode.Resizing
                        }
                        onClick={() => setCanvasState({ mode: CanvasMode.None })}
                    />
                </div>
                <div>
                    <ToolButton
                        label="Text"
                        icon={Type}
                        onClick={() =>
                            setCanvasState({
                                mode: CanvasMode.Text,
                                layerType: LayerType.Text,
                            })
                        }
                        isActive={
                            canvasState.mode === CanvasMode.Text &&
                            canvasState.layerType === LayerType.Text
                        }
                    />
                </div>
                <div>
                    <ToolButton
                        label="Sticky Note"
                        icon={StickyNote}
                        onClick={() => { }}
                        isActive={false}
                    />
                </div>
                <div>
                    <ToolButton
                        label="Rectangle"
                        icon={Square}
                        isActive={
                            canvasState.mode === CanvasMode.Inserting &&
                            canvasState.layerType === LayerType.Rectangle
                        }
                        onClick={() =>
                            setCanvasState({
                                mode: CanvasMode.Inserting,
                                layerType: LayerType.Rectangle,
                            })
                        }
                    />
                </div>
                <div>
                    <ToolButton
                        label="Circle"
                        icon={Circle}
                        isActive={
                            canvasState.mode === CanvasMode.Inserting &&
                            canvasState.layerType === LayerType.Ellipse
                        }
                        onClick={() =>
                            setCanvasState({
                                mode: CanvasMode.Inserting,
                                layerType: LayerType.Ellipse,
                            })
                        }
                    />
                </div>
                <div>
                    <ToolButton
                        label="Pen"
                        icon={Pen}
                        onClick={() => setCanvasState({ mode: CanvasMode.Pencil })}
                        isActive={canvasState.mode === CanvasMode.Pencil}
                    />
                </div>
            </div>
            <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-md">
                <div>
                    <ToolButton
                        label="Undo"
                        icon={Undo}
                        onClick={undo}
                        isDisabled={!canUndo}

                    />
                </div>
                <div>
                    <ToolButton
                        label="Redo"
                        icon={Redo}
                        onClick={redo}
                        isDisabled={!canRedo}

                    />
                </div>
            </div>
        </div>
    )
}




Toolbar.Skeleton = function ToolbarSkeleton() {
    return (
        <div className="absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4 bg-white h-[360px] w-[52px]">
        </div>
    )
}