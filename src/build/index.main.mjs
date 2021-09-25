// Automatically generated with Reach 0.1.4
/* eslint-disable */
export const _version = '0.1.4';
export const _backendVersion = 1;


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  
  return {
    infos: {
      "vNFT": {
        id: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v108, v109, v110, v116] = svs;
              return (await ((async () => {
                
                
                return v108;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2))) {
              const [v108, v109, v110, v116] = svs;
              return (await ((async () => {
                
                
                return v108;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v108, v109, v110, v116] = svs;
              return (await ((async () => {
                
                
                return v108;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v108, v109, v110, v116] = svs;
              return (await ((async () => {
                
                
                return v108;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5))) {
              const [v107, v108, v109, v110] = svs;
              return (await ((async () => {
                
                
                return v108;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc0
          },
        owner: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v108, v109, v110, v116] = svs;
              return (await ((async () => {
                
                
                return v116;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2))) {
              const [v108, v109, v110, v116] = svs;
              return (await ((async () => {
                
                
                return v116;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v108, v109, v110, v116] = svs;
              return (await ((async () => {
                
                
                return v116;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v108, v109, v110, v116] = svs;
              return (await ((async () => {
                
                
                return v116;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5))) {
              const [v107, v108, v109, v110] = svs;
              return (await ((async () => {
                
                
                return v107;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        price: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v108, v109, v110, v116] = svs;
              return (await ((async () => {
                
                
                return v109;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2))) {
              const [v108, v109, v110, v116] = svs;
              return (await ((async () => {
                
                
                return v109;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v108, v109, v110, v116] = svs;
              return (await ((async () => {
                
                
                return v109;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v108, v109, v110, v116] = svs;
              return (await ((async () => {
                
                
                return v109;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5))) {
              const [v107, v108, v109, v110] = svs;
              return (await ((async () => {
                
                
                return v109;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc0
          },
        tax: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v108, v109, v110, v116] = svs;
              return (await ((async () => {
                
                
                return v110;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 2))) {
              const [v108, v109, v110, v116] = svs;
              return (await ((async () => {
                
                
                return v110;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 3))) {
              const [v108, v109, v110, v116] = svs;
              return (await ((async () => {
                
                
                return v110;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 4))) {
              const [v108, v109, v110, v116] = svs;
              return (await ((async () => {
                
                
                return v110;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 5))) {
              const [v107, v108, v109, v110] = svs;
              return (await ((async () => {
                
                
                return v110;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc0
          }
        }
      },
    views: {
      1: [ctc0, ctc0, ctc0, ctc1],
      2: [ctc0, ctc0, ctc0, ctc1],
      3: [ctc0, ctc0, ctc0, ctc1],
      4: [ctc0, ctc0, ctc0, ctc1],
      5: [ctc1, ctc0, ctc0, ctc0]
      }
    };
  
  };

export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };

export async function Buyer(ctc, interact) {
  if (typeof(ctc) !== 'object' || ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for Buyer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Buyer expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const v15 = await ctc.creationTime();
  const v16 = await ctc.creationSecs();
  
  const txn1 = await (ctc.recv({
    evt_cnt: 3,
    funcNum: 1,
    out_tys: [ctc0, ctc0, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const [v108, v109, v110] = txn1.data;
  const v111 = txn1.time;
  const v112 = txn1.secs;
  const v107 = txn1.from;
  ;
  stdlib.protect(ctc1, await interact.buy(v108, v109), {
    at: './index.rsh:51:19:application',
    fs: ['at ./index.rsh:50:11:application call to [unknown function] (defined at: ./index.rsh:50:15:function exp)'],
    msg: 'buy',
    who: 'Buyer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v107, v108, v109, v110],
    evt_cnt: 0,
    funcNum: 2,
    onlyIf: true,
    out_tys: [],
    pay: [v109, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const [] = txn2.data;
      const v117 = txn2.time;
      const v118 = txn2.secs;
      const v116 = txn2.from;
      
      sim_r.txns.push({
        amt: v109,
        kind: 'to',
        tok: undefined
        });
      sim_r.txns.push({
        amt: v109,
        kind: 'from',
        to: v107,
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const [] = txn2.data;
  const v117 = txn2.time;
  const v118 = txn2.secs;
  const v116 = txn2.from;
  ;
  ;
  const v127 = stdlib.protect(ctc0, await interact.getPawnPrice(), {
    at: './index.rsh:60:57:application',
    fs: ['at ./index.rsh:59:11:application call to [unknown function] (defined at: ./index.rsh:59:15:function exp)'],
    msg: 'getPawnPrice',
    who: 'Buyer'
    });
  const v128 = stdlib.protect(ctc0, await interact.getRedeemPrice(), {
    at: './index.rsh:61:61:application',
    fs: ['at ./index.rsh:59:11:application call to [unknown function] (defined at: ./index.rsh:59:15:function exp)'],
    msg: 'getRedeemPrice',
    who: 'Buyer'
    });
  const v129 = stdlib.protect(ctc0, await interact.getEndDate(), {
    at: './index.rsh:62:53:application',
    fs: ['at ./index.rsh:59:11:application call to [unknown function] (defined at: ./index.rsh:59:15:function exp)'],
    msg: 'getEndDate',
    who: 'Buyer'
    });
  stdlib.protect(ctc1, await interact.pawnIt(), {
    at: './index.rsh:63:22:application',
    fs: ['at ./index.rsh:59:11:application call to [unknown function] (defined at: ./index.rsh:59:15:function exp)'],
    msg: 'pawnIt',
    who: 'Buyer'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v107, v108, v109, v110, v116, v127, v128, v129],
    evt_cnt: 3,
    funcNum: 3,
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const [v131, v132, v133] = txn3.data;
      const v134 = txn3.time;
      const v135 = txn3.secs;
      const v130 = txn3.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v137 = stdlib.addressEq(v116, v130);
      stdlib.assert(v137, {
        at: './index.rsh:65:7:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Buyer'
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc2, ctc0, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const [v131, v132, v133] = txn3.data;
  const v134 = txn3.time;
  const v135 = txn3.secs;
  const v130 = txn3.from;
  ;
  const v137 = stdlib.addressEq(v116, v130);
  stdlib.assert(v137, {
    at: './index.rsh:65:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Buyer'
    });
  const txn4 = await (ctc.recv({
    evt_cnt: 0,
    funcNum: 4,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const [] = txn4.data;
  const v141 = txn4.time;
  const v142 = txn4.secs;
  const v140 = txn4.from;
  ;
  ;
  const v151 = stdlib.protect(ctc0, await interact.getCurrentDate(), {
    at: './index.rsh:79:61:application',
    fs: ['at ./index.rsh:78:11:application call to [unknown function] (defined at: ./index.rsh:78:15:function exp)'],
    msg: 'getCurrentDate',
    who: 'Buyer'
    });
  stdlib.protect(ctc1, await interact.redeem(v108, v132, v133), {
    at: './index.rsh:80:22:application',
    fs: ['at ./index.rsh:78:11:application call to [unknown function] (defined at: ./index.rsh:78:15:function exp)'],
    msg: 'redeem',
    who: 'Buyer'
    });
  
  const txn5 = await (ctc.sendrecv({
    args: [v107, v108, v109, v110, v116, v132, v133, v140, v151],
    evt_cnt: 1,
    funcNum: 5,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const [v153] = txn5.data;
      const v154 = txn5.time;
      const v155 = txn5.secs;
      const v152 = txn5.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v157 = stdlib.addressEq(v116, v152);
      stdlib.assert(v157, {
        at: './index.rsh:82:7:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Buyer'
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc2, ctc0, ctc0, ctc0, ctc2, ctc0, ctc0, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const [v153] = txn5.data;
  const v154 = txn5.time;
  const v155 = txn5.secs;
  const v152 = txn5.from;
  ;
  const v157 = stdlib.addressEq(v116, v152);
  stdlib.assert(v157, {
    at: './index.rsh:82:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Buyer'
    });
  const txn6 = await (ctc.sendrecv({
    args: [v107, v110, v116, v132, v133, v140, v153],
    evt_cnt: 0,
    funcNum: 6,
    onlyIf: true,
    out_tys: [],
    pay: [v132, []],
    sim_p: (async (txn6) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const [] = txn6.data;
      const v159 = txn6.time;
      const v160 = txn6.secs;
      const v158 = txn6.from;
      
      sim_r.txns.push({
        amt: v132,
        kind: 'to',
        tok: undefined
        });
      const v163 = stdlib.addressEq(v116, v158);
      stdlib.assert(v163, {
        at: './index.rsh:85:7:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Buyer'
        });
      const v164 = stdlib.ge(v133, v153);
      if (v164) {
        const v165 = stdlib.sub(v132, v110);
        sim_r.txns.push({
          amt: v110,
          kind: 'from',
          to: v107,
          tok: undefined
          });
        sim_r.txns.push({
          amt: v165,
          kind: 'from',
          to: v140,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      else {
        sim_r.txns.push({
          amt: v132,
          kind: 'from',
          to: v116,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc2, ctc0, ctc2, ctc0, ctc0, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const [] = txn6.data;
  const v159 = txn6.time;
  const v160 = txn6.secs;
  const v158 = txn6.from;
  ;
  const v163 = stdlib.addressEq(v116, v158);
  stdlib.assert(v163, {
    at: './index.rsh:85:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Buyer'
    });
  const v164 = stdlib.ge(v133, v153);
  if (v164) {
    const v165 = stdlib.sub(v132, v110);
    ;
    ;
    return;}
  else {
    ;
    return;}
  
  
  
  
  
  
  };
export async function Creator(ctc, interact) {
  if (typeof(ctc) !== 'object' || ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  
  
  const v15 = await ctc.creationTime();
  const v16 = await ctc.creationSecs();
  
  const v104 = stdlib.protect(ctc0, await interact.getId(), {
    at: './index.rsh:38:43:application',
    fs: ['at ./index.rsh:37:11:application call to [unknown function] (defined at: ./index.rsh:37:15:function exp)'],
    msg: 'getId',
    who: 'Creator'
    });
  const v105 = stdlib.protect(ctc0, await interact.getPrice(), {
    at: './index.rsh:39:49:application',
    fs: ['at ./index.rsh:37:11:application call to [unknown function] (defined at: ./index.rsh:37:15:function exp)'],
    msg: 'getPrice',
    who: 'Creator'
    });
  const v106 = stdlib.protect(ctc0, await interact.getTax(), {
    at: './index.rsh:40:45:application',
    fs: ['at ./index.rsh:37:11:application call to [unknown function] (defined at: ./index.rsh:37:15:function exp)'],
    msg: 'getTax',
    who: 'Creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v104, v105, v106],
    evt_cnt: 3,
    funcNum: 1,
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const [v108, v109, v110] = txn1.data;
      const v111 = txn1.time;
      const v112 = txn1.secs;
      const v107 = txn1.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const [v108, v109, v110] = txn1.data;
  const v111 = txn1.time;
  const v112 = txn1.secs;
  const v107 = txn1.from;
  ;
  const txn2 = await (ctc.recv({
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const [] = txn2.data;
  const v117 = txn2.time;
  const v118 = txn2.secs;
  const v116 = txn2.from;
  ;
  ;
  const txn3 = await (ctc.recv({
    evt_cnt: 3,
    funcNum: 3,
    out_tys: [ctc0, ctc0, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const [v131, v132, v133] = txn3.data;
  const v134 = txn3.time;
  const v135 = txn3.secs;
  const v130 = txn3.from;
  ;
  const v137 = stdlib.addressEq(v116, v130);
  stdlib.assert(v137, {
    at: './index.rsh:65:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  const txn4 = await (ctc.recv({
    evt_cnt: 0,
    funcNum: 4,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const [] = txn4.data;
  const v141 = txn4.time;
  const v142 = txn4.secs;
  const v140 = txn4.from;
  ;
  ;
  const txn5 = await (ctc.recv({
    evt_cnt: 1,
    funcNum: 5,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const [v153] = txn5.data;
  const v154 = txn5.time;
  const v155 = txn5.secs;
  const v152 = txn5.from;
  ;
  const v157 = stdlib.addressEq(v116, v152);
  stdlib.assert(v157, {
    at: './index.rsh:82:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  const txn6 = await (ctc.recv({
    evt_cnt: 0,
    funcNum: 6,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const [] = txn6.data;
  const v159 = txn6.time;
  const v160 = txn6.secs;
  const v158 = txn6.from;
  ;
  const v163 = stdlib.addressEq(v116, v158);
  stdlib.assert(v163, {
    at: './index.rsh:85:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Creator'
    });
  const v164 = stdlib.ge(v133, v153);
  if (v164) {
    const v165 = stdlib.sub(v132, v110);
    ;
    ;
    return;}
  else {
    ;
    return;}
  
  
  
  
  
  
  };
export async function PawnBroker(ctc, interact) {
  if (typeof(ctc) !== 'object' || ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for PawnBroker expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for PawnBroker expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const v15 = await ctc.creationTime();
  const v16 = await ctc.creationSecs();
  
  const txn1 = await (ctc.recv({
    evt_cnt: 3,
    funcNum: 1,
    out_tys: [ctc0, ctc0, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const [v108, v109, v110] = txn1.data;
  const v111 = txn1.time;
  const v112 = txn1.secs;
  const v107 = txn1.from;
  ;
  const txn2 = await (ctc.recv({
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const [] = txn2.data;
  const v117 = txn2.time;
  const v118 = txn2.secs;
  const v116 = txn2.from;
  ;
  ;
  const txn3 = await (ctc.recv({
    evt_cnt: 3,
    funcNum: 3,
    out_tys: [ctc0, ctc0, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const [v131, v132, v133] = txn3.data;
  const v134 = txn3.time;
  const v135 = txn3.secs;
  const v130 = txn3.from;
  ;
  const v137 = stdlib.addressEq(v116, v130);
  stdlib.assert(v137, {
    at: './index.rsh:65:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'PawnBroker'
    });
  stdlib.protect(ctc1, await interact.accept(v108, v131, v132, v133), {
    at: './index.rsh:70:22:application',
    fs: ['at ./index.rsh:69:11:application call to [unknown function] (defined at: ./index.rsh:69:14:function exp)'],
    msg: 'accept',
    who: 'PawnBroker'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v107, v108, v109, v110, v116, v131, v132, v133],
    evt_cnt: 0,
    funcNum: 4,
    onlyIf: true,
    out_tys: [],
    pay: [v131, []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const [] = txn4.data;
      const v141 = txn4.time;
      const v142 = txn4.secs;
      const v140 = txn4.from;
      
      sim_r.txns.push({
        amt: v131,
        kind: 'to',
        tok: undefined
        });
      sim_r.txns.push({
        amt: v131,
        kind: 'from',
        to: v116,
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc2, ctc0, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const [] = txn4.data;
  const v141 = txn4.time;
  const v142 = txn4.secs;
  const v140 = txn4.from;
  ;
  ;
  const txn5 = await (ctc.recv({
    evt_cnt: 1,
    funcNum: 5,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const [v153] = txn5.data;
  const v154 = txn5.time;
  const v155 = txn5.secs;
  const v152 = txn5.from;
  ;
  const v157 = stdlib.addressEq(v116, v152);
  stdlib.assert(v157, {
    at: './index.rsh:82:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'PawnBroker'
    });
  const txn6 = await (ctc.recv({
    evt_cnt: 0,
    funcNum: 6,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const [] = txn6.data;
  const v159 = txn6.time;
  const v160 = txn6.secs;
  const v158 = txn6.from;
  ;
  const v163 = stdlib.addressEq(v116, v158);
  stdlib.assert(v163, {
    at: './index.rsh:85:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'PawnBroker'
    });
  const v164 = stdlib.ge(v133, v153);
  if (v164) {
    const v165 = stdlib.sub(v132, v110);
    ;
    ;
    return;}
  else {
    ;
    return;}
  
  
  
  
  
  
  };

const _ALGO = {
  appApproval: `#pragma version 4
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
int 0
store 0
txn ApplicationID
bz alloc
byte base64()
app_global_get
dup
substring 0 32
store 1
substring 32 64
store 2
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
dup
bz ctor
// Handler 1
dup
int 1
==
bz l0
pop
txna ApplicationArgs 1
dup
len
int 0
==
assert
pop
txna ApplicationArgs 2
dup
len
int 24
==
assert
dup
substring 0 8
btoi
store 255
dup
substring 8 16
btoi
store 254
dup
substring 16 24
btoi
store 253
pop
// compute state in HM_Check 0
int 8
bzero
sha256
load 1
==
assert
// "CheckPay"
// "./index.rsh:42:7:dot"
// "[]"
byte base64(AAAAAAAAAAU=)
txn Sender
concat
load 255
itob
concat
load 254
itob
concat
load 253
itob
concat
int 1
bzero
dig 1
substring 0 64
app_global_put
pop
// compute state in HM_Set 1
byte base64(AAAAAAAAAAE=)
txn Sender
concat
load 255
itob
concat
load 254
itob
concat
load 253
itob
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l0:
// Handler 2
dup
int 2
==
bz l1
pop
txna ApplicationArgs 1
dup
len
int 56
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 56
btoi
store 252
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 1
byte base64(AAAAAAAAAAE=)
load 255
concat
load 254
itob
concat
load 253
itob
concat
load 252
itob
concat
sha256
load 1
==
assert
// "CheckPay"
// "./index.rsh:53:7:dot"
// "[]"
load 253
dup
bz l2
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Receiver
==
assert
l2:
pop
load 253
dup
bz l3
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l3:
pop
byte base64(AAAAAAAAAAQ=)
load 254
itob
concat
load 253
itob
concat
load 252
itob
concat
txn Sender
concat
int 1
bzero
dig 1
substring 0 64
app_global_put
pop
// compute state in HM_Set 2
byte base64(AAAAAAAAAAI=)
load 255
concat
load 254
itob
concat
load 253
itob
concat
load 252
itob
concat
txn Sender
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l1:
// Handler 3
dup
int 3
==
bz l4
pop
txna ApplicationArgs 1
dup
len
int 88
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 56
btoi
store 252
dup
substring 56 88
store 251
pop
txna ApplicationArgs 2
dup
len
int 24
==
assert
dup
substring 0 8
btoi
store 250
dup
substring 8 16
btoi
store 249
dup
substring 16 24
btoi
store 248
pop
// compute state in HM_Check 2
byte base64(AAAAAAAAAAI=)
load 255
concat
load 254
itob
concat
load 253
itob
concat
load 252
itob
concat
load 251
concat
sha256
load 1
==
assert
// "CheckPay"
// "./index.rsh:65:7:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:65:7:dot"
// "[]"
load 251
txn Sender
==
assert
byte base64(AAAAAAAAAAM=)
load 254
itob
concat
load 253
itob
concat
load 252
itob
concat
load 251
concat
int 1
bzero
dig 1
substring 0 64
app_global_put
pop
// compute state in HM_Set 3
byte base64(AAAAAAAAAAM=)
load 255
concat
load 254
itob
concat
load 253
itob
concat
load 252
itob
concat
load 251
concat
load 250
itob
concat
load 249
itob
concat
load 248
itob
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l4:
// Handler 4
dup
int 4
==
bz l5
pop
txna ApplicationArgs 1
dup
len
int 112
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 56
btoi
store 252
dup
substring 56 88
store 251
dup
substring 88 96
btoi
store 250
dup
substring 96 104
btoi
store 249
dup
substring 104 112
btoi
store 248
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 3
byte base64(AAAAAAAAAAM=)
load 255
concat
load 254
itob
concat
load 253
itob
concat
load 252
itob
concat
load 251
concat
load 250
itob
concat
load 249
itob
concat
load 248
itob
concat
sha256
load 1
==
assert
// "CheckPay"
// "./index.rsh:73:7:dot"
// "[]"
load 250
dup
bz l6
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Receiver
==
assert
l6:
pop
load 250
dup
bz l7
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 251
dig 1
gtxns Receiver
==
assert
l7:
pop
byte base64(AAAAAAAAAAI=)
load 254
itob
concat
load 253
itob
concat
load 252
itob
concat
load 251
concat
int 1
bzero
dig 1
substring 0 64
app_global_put
pop
// compute state in HM_Set 4
byte base64(AAAAAAAAAAQ=)
load 255
concat
load 254
itob
concat
load 253
itob
concat
load 252
itob
concat
load 251
concat
load 249
itob
concat
load 248
itob
concat
txn Sender
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l5:
// Handler 5
dup
int 5
==
bz l8
pop
txna ApplicationArgs 1
dup
len
int 136
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 56
btoi
store 252
dup
substring 56 88
store 251
dup
substring 88 96
btoi
store 250
dup
substring 96 104
btoi
store 249
dup
substring 104 136
store 248
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 247
pop
// compute state in HM_Check 4
byte base64(AAAAAAAAAAQ=)
load 255
concat
load 254
itob
concat
load 253
itob
concat
load 252
itob
concat
load 251
concat
load 250
itob
concat
load 249
itob
concat
load 248
concat
sha256
load 1
==
assert
// "CheckPay"
// "./index.rsh:82:7:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:82:7:dot"
// "[]"
load 251
txn Sender
==
assert
byte base64(AAAAAAAAAAE=)
load 254
itob
concat
load 253
itob
concat
load 252
itob
concat
load 251
concat
int 1
bzero
dig 1
substring 0 64
app_global_put
pop
// compute state in HM_Set 5
byte base64(AAAAAAAAAAU=)
load 255
concat
load 252
itob
concat
load 251
concat
load 250
itob
concat
load 249
itob
concat
load 248
concat
load 247
itob
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
l8:
// Handler 6
dup
int 6
==
bz l9
pop
txna ApplicationArgs 1
dup
len
int 128
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
dup
substring 80 88
btoi
store 251
dup
substring 88 120
store 250
dup
substring 120 128
btoi
store 249
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// compute state in HM_Check 5
byte base64(AAAAAAAAAAU=)
load 255
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
load 250
concat
load 249
itob
concat
sha256
load 1
==
assert
// "CheckPay"
// "./index.rsh:85:7:dot"
// "[]"
load 252
dup
bz l10
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Receiver
==
assert
l10:
pop
// Just "sender correct"
// "./index.rsh:85:7:dot"
// "[]"
load 253
txn Sender
==
assert
load 251
load 249
>=
bz l11
load 254
dup
bz l12
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l12:
pop
load 252
load 254
-
dup
bz l13
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 250
dig 1
gtxns Receiver
==
assert
l13:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l14:
pop
global ZeroAddress
store 1
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l11:
load 252
dup
bz l15
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 253
dig 1
gtxns Receiver
==
assert
l15:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l16:
pop
global ZeroAddress
store 1
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l9:
int 0
assert
updateState:
byte base64()
load 1
load 2
concat
app_global_put
checkSize:
load 0
dup
dup
int 1
+
global GroupSize
==
assert
txn GroupIndex
==
assert
int 1000
*
txn Fee
<=
assert
done:
int 1
return
alloc:
txn OnCompletion
int NoOp
==
assert
byte base64()
int 64
bzero
app_global_put
b checkSize
ctor:
txn Sender
global CreatorAddress
==
assert
txna ApplicationArgs 1
store 2
int 64
bzero
int 1
bzero
dig 1
substring 0 64
app_global_put
pop
// compute state in HM_Set 0
int 8
bzero
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
`,
  appClear: `#pragma version 4
int 0
`,
  escrow: `#pragma version 4
global GroupSize
int 1
-
dup
gtxns TypeEnum
int appl
==
assert
gtxns ApplicationID
int {{ApplicationID}}
==
assert
done:
int 1
`,
  mapDataKeys: 0,
  mapDataSize: 0,
  unsupported: [],
  version: 2,
  viewKeys: 1,
  viewSize: 64
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "svs",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v108",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v109",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v110",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v107",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v108",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v109",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v110",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v107",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v108",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v109",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v110",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v116",
                "type": "address"
              }
            ],
            "internalType": "struct T5",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v132",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v133",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v107",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v108",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v109",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v110",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v116",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v132",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v133",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v107",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v108",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v109",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v110",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v116",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v132",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v133",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v140",
                "type": "address"
              }
            ],
            "internalType": "struct T10",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v153",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v107",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v110",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v116",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v132",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v133",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v140",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v153",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e6",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "svs",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v108",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v109",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v110",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v107",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v108",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v109",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v110",
                "type": "uint256"
              }
            ],
            "internalType": "struct T2",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v107",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v108",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v109",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v110",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v116",
                "type": "address"
              }
            ],
            "internalType": "struct T5",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v132",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v133",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v107",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v108",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v109",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v110",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v116",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v131",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v132",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v133",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v107",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v108",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v109",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v110",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v116",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v132",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v133",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v140",
                "type": "address"
              }
            ],
            "internalType": "struct T10",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v153",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v107",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v110",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v116",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v132",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v133",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v140",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v153",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "svs",
            "type": "tuple"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "vNFT_id",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "vNFT_owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "vNFT_price",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "vNFT_tax",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a160408051808201825243815242602080830191909152600060018190558351918201819052919201604051602081830303815290604052600290805190602001906200007a929190620000b6565b506040805160006020820181905291810182905260600160408051601f1981840301815291905280516020909101206000555062000199915050565b828054620000c4906200015c565b90600052602060002090601f016020900481019282620000e8576000855562000133565b82601f106200010357805160ff191683800117855562000133565b8280016001018555821562000133579182015b828111156200013357825182559160200191906001019062000116565b506200014192915062000145565b5090565b5b8082111562000141576000815560010162000146565b600181811c908216806200017157607f821691505b602082108114156200019357634e487b7160e01b600052602260045260246000fd5b50919050565b611cca80620001a96000396000f3fe6080604052600436106100955760003560e01c80639c224dfd116100595780639c224dfd1461011b578063d75ea12a1461012e578063e4f83a8f14610141578063fde486c214610154578063fe05fe071461016757600080fd5b806332810368146100a15780633a8d642c146100c957806351f26ecd146100de5780638611cc01146100f1578063940c544d1461010657600080fd5b3661009c57005b600080fd5b3480156100ad57600080fd5b506100b6610194565b6040519081526020015b60405180910390f35b6100dc6100d7366004611709565b61035c565b005b6100dc6100ec3660046117e0565b610622565b3480156100fd57600080fd5b506100b66107ad565b34801561011257600080fd5b506100b6610965565b6100dc610129366004611726565b610b20565b6100dc61013c366004611709565b610ce4565b6100dc61014f3660046117f2565b610f57565b6100dc610162366004611726565b611153565b34801561017357600080fd5b5061017c6113b3565b6040516001600160a01b0390911681526020016100c0565b600060018054141561024a576000600280546101af90611c4a565b80601f01602080910402602001604051908101604052809291908181526020018280546101db90611c4a565b80156102285780601f106101fd57610100808354040283529160200191610228565b820191906000526020600020905b81548152906001019060200180831161020b57829003601f168201915b50505050508060200190518101906102409190611743565b6020015192915050565b60026001541415610264576000600280546101af90611c4a565b6003600154141561027e576000600280546101af90611c4a565b60046001541415610298576000600280546101af90611c4a565b6005600154141561034d576000600280546102b290611c4a565b80601f01602080910402602001604051908101604052809291908181526020018280546102de90611c4a565b801561032b5780601f106103005761010080835404028352916020019161032b565b820191906000526020600020905b81548152906001019060200180831161030e57829003601f168201915b5050505050806020019051810190610343919061178f565b6040015192915050565b61035960006009611560565b90565b60405161039890610374906003908490602001611bd9565b6040516020818303038152906040528051906020012060001c600054146013611560565b600080556040517f22456aa3acb754c271318c61c0a241302afb30c9d713de12cbf60aebdd901388906103cc9083906119e3565b60405180910390a16103e53460a0830135146012611560565b6103f560a08201608083016116ca565b6040516001600160a01b03919091169060a083013580156108fc02916000818181858888f19350505050158015610430573d6000803e3d6000fd5b50610439611589565b60208083013582526040808401359183019190915260608301359082015261046760a08301608084016116ca565b6001600160a01b03166060820152600260015560405161048b908290602001611a53565b604051602081830303815290604052600290805190602001906104af9291906115ba565b5061051360405180610100016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681525090565b61052060208401846116ca565b6001600160a01b0316815260208084013590820152604080840135908201526060808401359082015261055960a08401608085016116ca565b6001600160a01b0316608082015260c08084013560a083015260e08085013591830191909152339082015260405161060290600490839060200160006101208201905083825260018060a01b038084511660208401526020840151604084015260408401516060840152606084015160808401528060808501511660a084015260a084015160c084015260c084015160e08401528060e085015116610100840152509392505050565b60408051601f198184030181529190528051602090910120600055505050565b610674600061063460208401846116ee565b6040516020016106509291909182521515602082015260400190565b6040516020818303038152906040528051906020012060001c60005414600c611560565b600080556040517fda4586be7498f530dc56dae927100c0489d23d9996822fc3fd773a8e8656e7cb906106a8908390611abd565b60405180910390a16106bc3415600b611560565b6106f0604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b33815260208083013581830152604080840135818401526060808501359084015260056001555161072391839101611a87565b604051602081830303815290604052600290805190602001906107479291906115ba565b5061077c604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b3381526020808401358183015260408085013581840152606080860135908401525161060291600191849101611b8a565b6000600180541415610860576000600280546107c890611c4a565b80601f01602080910402602001604051908101604052809291908181526020018280546107f490611c4a565b80156108415780601f1061081657610100808354040283529160200191610841565b820191906000526020600020905b81548152906001019060200180831161082457829003601f168201915b50505050508060200190518101906108599190611743565b5192915050565b6002600154141561087a576000600280546107c890611c4a565b60036001541415610894576000600280546107c890611c4a565b600460015414156108ae576000600280546107c890611c4a565b60056001541415610959576000600280546108c890611c4a565b80601f01602080910402602001604051908101604052809291908181526020018280546108f490611c4a565b80156109415780601f1061091657610100808354040283529160200191610941565b820191906000526020600020905b81548152906001019060200180831161092457829003601f168201915b5050505050806020019051810190610240919061178f565b61035960006007611560565b6000600180541415610a115760006002805461098090611c4a565b80601f01602080910402602001604051908101604052809291908181526020018280546109ac90611c4a565b80156109f95780601f106109ce576101008083540402835291602001916109f9565b820191906000526020600020905b8154815290600101906020018083116109dc57829003601f168201915b50505050508060200190518101906103439190611743565b60026001541415610a2b5760006002805461098090611c4a565b60036001541415610a455760006002805461098090611c4a565b60046001541415610a5f5760006002805461098090611c4a565b60056001541415610b1457600060028054610a7990611c4a565b80601f0160208091040260200160405190810160405280929190818152602001828054610aa590611c4a565b8015610af25780601f10610ac757610100808354040283529160200191610af2565b820191906000526020600020905b815481529060010190602001808311610ad557829003601f168201915b5050505050806020019051810190610b0a919061178f565b6060015192915050565b6103596000600a611560565b604051610b5c90610b38906005908490602001611b61565b6040516020818303038152906040528051906020012060001c600054146019611560565b600080556040517f20867961b9dfb777754a4040182a3af2a924f7a5fee2eda3abe0fb16b63c239390610b90908390611a2b565b60405180910390a1610ba9346060830135146017611560565b610bce33610bbd60608401604085016116ca565b6001600160a01b0316146018611560565b60c0810135608082013510610c9657610bea60208201826116ca565b6040516001600160a01b039190911690602083013580156108fc02916000818181858888f19350505050158015610c25573d6000803e3d6000fd5b50610c3660c0820160a083016116ca565b6001600160a01b03166108fc610c5460208401356060850135611c25565b6040518115909202916000818181858888f19350505050158015610c7c573d6000803e3d6000fd5b5060008080556001819055610c939060029061163e565b33ff5b610ca660608201604083016116ca565b6040516001600160a01b039190911690606083013580156108fc02916000818181858888f19350505050158015610c7c573d6000803e3d6000fd5b50565b604051610d2090610cfc906004908490602001611b4c565b6040516020818303038152906040528051906020012060001c600054146016611560565b600080556040517fbd515801faa698a2d420a80b296570e87da0859b218f32f09466f1117106735190610d54908390611a0d565b60405180910390a1610d6834156014611560565b610d8d33610d7c60a08401608085016116ca565b6001600160a01b0316146015611560565b610d95611589565b602080830135825260408084013591830191909152606083013590820152610dc360a08301608084016116ca565b6001600160a01b0316606082015260018055604051610de6908290602001611a53565b60405160208183030381529060405260029080519060200190610e0a9291906115ba565b50610e666040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b610e7360208401846116ca565b6001600160a01b0316815260608301356020820152610e9860a08401608085016116ca565b6001600160a01b0316604082015260a0830135606082015260c08301356080820152610ecb610100840160e085016116ca565b6001600160a01b031660a082015261010083013560c082015260405161060290600590839060200160006101008201905083825260018060a01b038084511660208401526020840151604084015280604085015116606084015260608401516080840152608084015160a08401528060a08501511660c08401525060c083015160e08301529392505050565b604051610f9390610f6f906001908490602001611b76565b6040516020818303038152906040528051906020012060001c60005414600e611560565b600080556040517fe2fcb5361608dd42d825c4e917fd4fca89057bb8eb0b7e34b8c2813a114cc15290610fc7908390611af2565b60405180910390a1610fe034604083013514600d611560565b610fed60208201826116ca565b604080516001600160a01b0392909216919083013580156108fc02916000818181858888f19350505050158015611028573d6000803e3d6000fd5b50611031611589565b60208083013582526040808401358383015260608085013582850152339084015260046001555161106491839101611a53565b604051602081830303815290604052600290805190602001906110889291906115ba565b506110cd6040518060a0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b031681525090565b6110da60208401846116ca565b6001600160a01b039081168252602084810135818401908152604080870135818601908152606080890135818801908152336080808a01918252855160029881019890985289518916958801959095529451918601919091529051918401919091525160a08301525190911660c082015260e001610602565b60405161118f9061116b906002908490602001611bc5565b6040516020818303038152906040528051906020012060001c600054146011611560565b600080556040517f34ee7b68b33a29b72127b256b2c8161aaa843e5238e8a709dd6dcfd1216cc540906111c3908390611b19565b60405180910390a16111d73415600f611560565b6111fc336111eb60a08401608085016116ca565b6001600160a01b0316146010611560565b611204611589565b60208083013582526040808401359183019190915260608301359082015261123260a08301608084016116ca565b6001600160a01b031660608201526003600155604051611256908290602001611a53565b6040516020818303038152906040526002908051906020019061127a9291906115ba565b506112d560405180610100016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b6112e260208401846116ca565b6001600160a01b0316815260208084013590820152604080840135908201526060808401359082015261131b60a08401608085016116ca565b6001600160a01b03908116608083810191825260a08681013581860190815260c08089013581880190815260e0808b0135818a019081526040805160036020808301919091528c518c16828401528c0151606080830191909152918c0151988101989098528a015195870195909552955190961690840152519282019290925291516101008301525161012082015261014001610602565b600060018054141561145f576000600280546113ce90611c4a565b80601f01602080910402602001604051908101604052809291908181526020018280546113fa90611c4a565b80156114475780601f1061141c57610100808354040283529160200191611447565b820191906000526020600020905b81548152906001019060200180831161142a57829003601f168201915b5050505050806020019051810190610b0a9190611743565b60026001541415611479576000600280546113ce90611c4a565b60036001541415611493576000600280546113ce90611c4a565b600460015414156114ad576000600280546113ce90611c4a565b60056001541415611558576000600280546114c790611c4a565b80601f01602080910402602001604051908101604052809291908181526020018280546114f390611c4a565b80156115405780601f1061151557610100808354040283529160200191611540565b820191906000526020600020905b81548152906001019060200180831161152357829003601f168201915b5050505050806020019051810190610859919061178f565b610359600060085b816115855760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604051806080016040528060008152602001600081526020016000815260200160006001600160a01b031681525090565b8280546115c690611c4a565b90600052602060002090601f0160209004810192826115e8576000855561162e565b82601f1061160157805160ff191683800117855561162e565b8280016001018555821561162e579182015b8281111561162e578251825591602001919060010190611613565b5061163a929150611674565b5090565b50805461164a90611c4a565b6000825580601f1061165a575050565b601f016020900490600052602060002090810190610ce191905b5b8082111561163a5760008155600101611675565b8035801515811461169957600080fd5b919050565b600061012082840312156116b157600080fd5b50919050565b600061010082840312156116b157600080fd5b6000602082840312156116dc57600080fd5b81356116e781611c7f565b9392505050565b60006020828403121561170057600080fd5b6116e782611689565b6000610120828403121561171c57600080fd5b6116e7838361169e565b6000610100828403121561173957600080fd5b6116e783836116b7565b60006080828403121561175557600080fd5b61175d611bee565b825181526020830151602082015260408301516040820152606083015161178381611c7f565b60608201529392505050565b6000608082840312156117a157600080fd5b6117a9611bee565b82516117b481611c7f565b808252506020830151602082015260408301516040820152606083015160608201528091505092915050565b6000608082840312156116b157600080fd5b600060a082840312156116b157600080fd5b803561180f81611c7f565b6001600160a01b03908116835260208281013590840152604080830135908401526060808301359084015260808201359061184982611c7f565b808216608085015260a083013560a085015260c083013560c085015260e0830135915061187582611c7f565b80821660e085015250505050565b803561188e81611c7f565b6001600160a01b039081168352602082810135908401526040820135906118b482611c7f565b8082166040850152606083013560608501526080830135608085015260a083013591506118e082611c7f565b1660a083015260c090810135910152565b80356118fc81611c7f565b6001600160a01b031682526020818101359083015260408082013590830152606090810135910152565b803561193181611c7f565b6001600160a01b03908116835260208281013590840152604080830135908401526060808301359084015260808201359061196b82611c7f565b808216608085015250505050565b803561198481611c7f565b6001600160a01b0390811683526020828101359084015260408083013590840152606080830135908401526080820135906119be82611c7f565b16608083015260a0818101359083015260c0808201359083015260e090810135910152565b61012081016119f28284611979565b610100611a00818501611689565b1515818401525092915050565b6101208101611a1c8284611804565b61010092830135919092015290565b6101008101611a3a8284611883565b611a4660e08401611689565b151560e083015292915050565b8151815260208083015190820152604080830151908201526060918201516001600160a01b03169181019190915260800190565b81516001600160a01b03168152602080830151908201526040808301519082015260608083015190820152608081015b92915050565b60808101611aca83611689565b15158252611ab760208301602085018035825260208082013590830152604090810135910152565b60a08101611b0082846118f1565b611b0c60808401611689565b1515608083015292915050565b6101008101611b288284611926565b611ab760a0830160a085018035825260208082013590830152604090810135910152565b82815261012081016116e76020830184611804565b82815261010081016116e76020830184611883565b82815260a081016116e760208301846118f1565b82815260a081016116e7602083018480516001600160a01b031682526020808201519083015260408082015190830152606090810151910152565b82815260c081016116e76020830184611926565b82815261012081016116e76020830184611979565b6040516080810167ffffffffffffffff81118282101715611c1f57634e487b7160e01b600052604160045260246000fd5b60405290565b600082821015611c4557634e487b7160e01b600052601160045260246000fd5b500390565b600181811c90821680611c5e57607f821691505b602082108114156116b157634e487b7160e01b600052602260045260246000fd5b6001600160a01b0381168114610ce157600080fdfea264697066735822122032cbb65cef6a6e0066efa68da911546e7f9d2155eddf150606b6a3b7b8b983a664736f6c63430008070033`,
  BytecodeLen: 7795,
  Which: `oD`,
  deployMode: `DM_constructor`,
  version: 1,
  views: {
    vNFT: {
      id: `vNFT_id`,
      owner: `vNFT_owner`,
      price: `vNFT_price`,
      tax: `vNFT_tax`
      }
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

