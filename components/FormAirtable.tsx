export default function FormAirtable() {
    return (
        <section className="relative py-12 md:py-20 px-4 sm:px-6 bg-[#f5f5f5] ">
            <div className="max-w-sm md:max-w-4xl mx-auto">
                <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
                <iframe className="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/appudjkzcwnIO9ch9/shrwfLcnh19o9jTfr?backgroundColor=red" frameBorder="0" width="100%" height="3970" style={{ background: "transparent", border: "1px solid #ccc" }}></iframe>
            </div>
        </section>
    )
}
