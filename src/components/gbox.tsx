
export function GrBox ({children}:any) {
    return (
        <div style={{
            backgroundAttachment: "scroll",
            backgroundColor: "rgba(0, 0, 0, 0)",
            backgroundImage: "linear-gradient(to right, #000067, #7856ff)",
            backgroundRepeat: "repeat",
            color: "rgb(255, 255, 255)",
            height: 400,
            width: 400,
            margin: 20,
            boxShadow: "0 5px 30px 15px #000099",
            borderRadius: 20,
            padding:30
        }}>
            {children}
        </div>
    );
}