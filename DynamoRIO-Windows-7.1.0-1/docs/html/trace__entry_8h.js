var trace__entry_8h =
[
    [ "TRACE_ENTRY_VERSION", "trace__entry_8h.html#afd3e3d65883266c5efffae016573be6f", null ],
    [ "addr_t", "trace__entry_8h.html#a1ca6d6805df0fccbaf3f7920d1845168", null ],
    [ "trace_marker_type_t", "trace__entry_8h.html#aa7f51b43d8f1e20dc45e3618684b15e9", [
      [ "TRACE_MARKER_TYPE_KERNEL_EVENT", "trace__entry_8h.html#aa7f51b43d8f1e20dc45e3618684b15e9a3aa19ac796e054c478f0a6ec99286020", null ],
      [ "TRACE_MARKER_TYPE_KERNEL_XFER", "trace__entry_8h.html#aa7f51b43d8f1e20dc45e3618684b15e9ac4c50c1d963ad69c80c6b32c3798c860", null ],
      [ "TRACE_MARKER_TYPE_TIMESTAMP", "trace__entry_8h.html#aa7f51b43d8f1e20dc45e3618684b15e9aab2a51d7215cf0da83ec1d74f980e89f", null ],
      [ "TRACE_MARKER_TYPE_CPU_ID", "trace__entry_8h.html#aa7f51b43d8f1e20dc45e3618684b15e9ac2f102f83bb096ff30ccf7f504a931b7", null ],
      [ "TRACE_MARKER_TYPE_FUNC_ID", "trace__entry_8h.html#aa7f51b43d8f1e20dc45e3618684b15e9aec6125caa15377556194a5b170f05fda", null ],
      [ "TRACE_MARKER_TYPE_FUNC_RETADDR", "trace__entry_8h.html#aa7f51b43d8f1e20dc45e3618684b15e9aa091a097a1d8e401874821ef62026b69", null ],
      [ "TRACE_MARKER_TYPE_FUNC_ARG", "trace__entry_8h.html#aa7f51b43d8f1e20dc45e3618684b15e9ae7a8478d8c5731b6e54d609b53867f9e", null ],
      [ "TRACE_MARKER_TYPE_FUNC_RETVAL", "trace__entry_8h.html#aa7f51b43d8f1e20dc45e3618684b15e9a7752ed00ff040eb90f807e1745fdda67", null ]
    ] ],
    [ "trace_type_t", "trace__entry_8h.html#a00405f99b069de9812b34db3a192b19d", [
      [ "TRACE_TYPE_READ", "trace__entry_8h.html#a00405f99b069de9812b34db3a192b19da2264004d45a5c8fe2b6713e2fe263c32", null ],
      [ "TRACE_TYPE_WRITE", "trace__entry_8h.html#a00405f99b069de9812b34db3a192b19da60151b6a9297d5cf8e95f965ec3e2658", null ],
      [ "TRACE_TYPE_PREFETCH", "trace__entry_8h.html#a00405f99b069de9812b34db3a192b19da8721c83dbae261fe1b2e51b3926eb38b", null ],
      [ "TRACE_TYPE_PREFETCHT0", "trace__entry_8h.html#a00405f99b069de9812b34db3a192b19dae86a44d02ed3d32dda2bd4ae36a66cd8", null ],
      [ "TRACE_TYPE_PREFETCHT1", "trace__entry_8h.html#a00405f99b069de9812b34db3a192b19da7be869a246f763794e4ccab21f228fbf", null ],
      [ "TRACE_TYPE_PREFETCHT2", "trace__entry_8h.html#a00405f99b069de9812b34db3a192b19dafe360afb36e204f27ca07e0803007697", null ],
      [ "TRACE_TYPE_PREFETCHNTA", "trace__entry_8h.html#a00405f99b069de9812b34db3a192b19dadb2c64b984defb0110e2395e5e427c30", null ],
      [ "TRACE_TYPE_PREFETCH_READ", "trace__entry_8h.html#a00405f99b069de9812b34db3a192b19dad71dc609130afecc8c31419943f39310", null ],
      [ "TRACE_TYPE_PREFETCH_WRITE", "trace__entry_8h.html#a00405f99b069de9812b34db3a192b19da0b1642579a936e82e133d488acb8f42b", null ],
      [ "TRACE_TYPE_PREFETCH_INSTR", "trace__entry_8h.html#a00405f99b069de9812b34db3a192b19dad1e454bcab381b5e9f28d113be4a7af9", null ],
      [ "TRACE_TYPE_INSTR", "trace__entry_8h.html#a00405f99b069de9812b34db3a192b19da4218a853e1b597bba8f328459012e387", null ],
      [ "TRACE_TYPE_INSTR_DIRECT_JUMP", "trace__entry_8h.html#a00405f99b069de9812b34db3a192b19dab21f24181f7c02ce133cebb0eb0d6023", null ],
      [ "TRACE_TYPE_INSTR_INDIRECT_JUMP", "trace__entry_8h.html#a00405f99b069de9812b34db3a192b19da227a58b0a5cfe3d0803a45d42ed1c292", null ],
      [ "TRACE_TYPE_INSTR_CONDITIONAL_JUMP", "trace__entry_8h.html#a00405f99b069de9812b34db3a192b19da898f1a70371058bf641cd5e29cdfec53", null ],
      [ "TRACE_TYPE_INSTR_DIRECT_CALL", "trace__entry_8h.html#a00405f99b069de9812b34db3a192b19dad554a9a4baa4492b4d4b405bfd3870a3", null ],
      [ "TRACE_TYPE_INSTR_INDIRECT_CALL", "trace__entry_8h.html#a00405f99b069de9812b34db3a192b19da74bb36ffd1eace7758e7cf925beaa4ee", null ],
      [ "TRACE_TYPE_INSTR_RETURN", "trace__entry_8h.html#a00405f99b069de9812b34db3a192b19daa97f8d1bc58f4fb86f749adf3c4ccd42", null ],
      [ "TRACE_TYPE_INSTR_FLUSH", "trace__entry_8h.html#a00405f99b069de9812b34db3a192b19dae5877dfac70932ee85076f0a5926c6d2", null ],
      [ "TRACE_TYPE_DATA_FLUSH", "trace__entry_8h.html#a00405f99b069de9812b34db3a192b19daccb6561ea4d6a69731520126eff5d965", null ],
      [ "TRACE_TYPE_THREAD_EXIT", "trace__entry_8h.html#a00405f99b069de9812b34db3a192b19dabc61f2a3ccb63ec2f39cb0c49b6b1a4e", null ],
      [ "TRACE_TYPE_HARDWARE_PREFETCH", "trace__entry_8h.html#a00405f99b069de9812b34db3a192b19da834a4e5932c7553822094c50218b541b", null ],
      [ "TRACE_TYPE_MARKER", "trace__entry_8h.html#a00405f99b069de9812b34db3a192b19daf649d254f7789cf368fb1d52431ad2b2", null ],
      [ "TRACE_TYPE_INSTR_NO_FETCH", "trace__entry_8h.html#a00405f99b069de9812b34db3a192b19dad25c12963676fab16cf2185c66105b70", null ],
      [ "TRACE_TYPE_INSTR_SYSENTER", "trace__entry_8h.html#a00405f99b069de9812b34db3a192b19da058dddb09a6c901c5aae02875b3cebdb", null ]
    ] ],
    [ "type_is_instr", "trace__entry_8h.html#ad9435e2fc94c587d4af59441c0de9d3c", null ],
    [ "type_is_instr_branch", "trace__entry_8h.html#a507c56307a93f25c501b6cd72c18c269", null ],
    [ "type_is_prefetch", "trace__entry_8h.html#a7d7697dab762a2fdd95c790e554ba171", null ]
];