class SmallestIntegerFinder {
  findSmallestInt(args) {
    let sorted = args.sort((a,b)=>a-b);
    return sorted[0];
  }
}