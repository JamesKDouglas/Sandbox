function describeAge(a) {
    let s="You're a(n)"
    return (a>=65)?`${s} elderly`:(a>=18)?`${s} adult`:(a>=13)?`${s} teenager`:`${s} kid`
  }