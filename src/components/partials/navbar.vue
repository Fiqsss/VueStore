<template>
  <div id="navbar">
    <nav class="navbar bg-light navbar-expand shadow" data-bs-theme="light">
      <div class="container ms-auto">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse ms-auto  d-flex justify-content-between" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <RouterLink class="nav-link" :to="{ name: 'product' }"><h3 class="text-success">Fiqsss Store</h3></RouterLink>
          </div>
          <div class="navbar-nav">
            <RouterLink class="nav-link" :to="{ name : 'cart'}">Cart</RouterLink>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
