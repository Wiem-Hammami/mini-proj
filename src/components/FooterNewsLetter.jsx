function FooterNewsLetter (){
    return (
        <div className="col-md-4 col-sm-6">
  <div className="footer-newsletter">
    <h2 className="footer-wid-title">Newsletter</h2>
    <p>
      Sign up to our newsletter and get exclusive deals you wont find anywhere
      else straight to your inbox!
    </p>
    <div className="newsletter-form">
      <form action="#">
        <input type="email" placeholder="Type your email" required="" />
        <input type="submit" defaultValue="Subscribe" />
      </form>
    </div>
  </div>
</div>

    )
};
export default FooterNewsLetter;