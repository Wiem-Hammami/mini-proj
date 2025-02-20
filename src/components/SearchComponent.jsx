function SearchComponent({ isVisible }){
    if (!isVisible) return null;
    return (
        <>
                        <input type="text" style={{marginTop: "30px"}} placeholder="Search products..."/>
                        <input type="button" value="Search"/>
               </>
    )
}
export default SearchComponent;