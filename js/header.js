  const header = document.getElementById("navigation")

const getHeaderValue = () => {
    return(
        header.innerHTML = `
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item navItem">
            <a class="nav-link" href="../index.html">HOME<span class="sr-only">(current)</span></a>
          </li>
          <li class="navItem">
              <a class="nav-link" href="#">ABOUT US</a>
            </li>
          <li class="navItem">
              <a class="nav-link" href="#">CONTACT US</a>
            </li>
            
            <li class="nav-item dropdown navItem">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                OUR COLLECTION
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item drop" href="/pages/collection.html">SNEAKERS</a>
                <a class="dropdown-item drop" href="/pages/officeshoes.html"> LEATHER SHOES</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item drop" href="/pages/sandals.html">SANDALS</a>
              </div>
            </li>
        </ul>
        <a href="/pages/login.html"><button class="btn btn-outline my-2 my-sm-0 search">Login</button></a>
        <div class="user-icon">
        <i class="fa fa-user fa-2x "></i>
        <div>
          <a href="/pages/cart.html" style="text-decoration: none;"><i class=" fa fa-shopping-cart  fa-2x cart"></i></a>
          <span class="badge badge-secondary badge-pill toast2" id="toast">0</span>
          </div>
      </div>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline my-2 my-sm-0 search" type="submit">Search</button>
        </form>
      </div>
        `
    )
}

getHeaderValue();