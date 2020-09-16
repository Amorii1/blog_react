import Link from 'next/link'
const Card=()=>{
    return(
        <>
        <div className="blog-item">
            <div className="img">
              <img src="cover.png" />
            </div>
            <h4>FIRST BLOG Title...
              
            </h4>
            <small>By FikraSpace</small>
            <div className="card-footer">
              <Link href="article"><a>Read article</a></Link>
              <span>June 19, 2020</span>
            </div>
          </div>
        </>
    )
}
export default Card;
