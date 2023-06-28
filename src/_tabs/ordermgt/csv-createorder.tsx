import { UploadArea } from "@/components/UploadArea"


const CsvCreateOrderDetail = () => {
    return (
        <>
        <div>
            <h1 className="font-extrabold text-xl my-3">Upload your CSV file</h1>
            <div>
            <UploadArea/>
            </div>
            <div style={{width: '700px'}}>
                <p>To import your inventory from CSV file it has to be formatted correctly. Each file should have an Item name, Quantity, Size, Picture of item, SKU ID, Unit price, Brief description.
     <a href="/" style={{color: '#3694EB'}}> Click to download CSV sample.</a></p>
            </div>
        </div>


        </>
    )
}

export { CsvCreateOrderDetail }