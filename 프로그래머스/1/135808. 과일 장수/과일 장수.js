solution = (_, m, s) => s.sort().filter((_, i) => !((s.length - i) % m)).reduce((a, v) => a + v, 0) * m
