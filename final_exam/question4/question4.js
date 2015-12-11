// In mongo client connected to primary:
cfg = rs.conf() // get the config object
cfg.members[2].priority = 0 // change the priority of server 3
rs.reconfig(cfg) // apply the changes
