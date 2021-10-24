const base = {
  source: "https://raw.githubusercontent.com/",
  repo: "Xperiement/agni_data",
  branch: "/main",
  base_file: "/base.json",
  data_file: "/data.json",
};

export const env_data = {
  base_root: "/agni",
  base_data: base.source + base.repo + base.branch + base.base_file,
  device_data: base.source + base.repo + base.branch + base.data_file,
};
