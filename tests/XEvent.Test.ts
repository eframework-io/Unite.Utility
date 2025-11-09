// Copyright (c) 2025 EFramework Innovation. All rights reserved.
// Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

import { XEvent } from "../src/XEvent"
import { XTest } from "../src/XTest"

export const TestXEvent = XTest.Test("XEvent", async () => {
    let ret1 = false
    let ret2 = false
    let ret3 = false
    let str = null

    const cb1 = () => { ret1 = !ret1 }
    var evtMgr = new XEvent.Manager(false)
    XTest.Expect(evtMgr.Register(1000, cb1, true), "Register multiple").ToBe(true)
    XTest.Expect(evtMgr.Register(1000, cb1, true), "Register multiple").ToBe(false)
    XTest.Expect(evtMgr.Unregister(1000, cb1), "UnUnregisterreg multiple").ToBe(true)
    XTest.Expect(evtMgr.Unregister(1000, cb1), "Unregister multiple").ToBe(false)

    evtMgr = new XEvent.Manager()
    evtMgr.Register(1000, cb1, true)
    evtMgr.Notify(1000)
    XTest.Expect(ret1, "Notify").ToBe(true)

    ret1 = false
    evtMgr.Notify(1000)
    XTest.Expect(ret1, "Notify once").ToBe(false)

    const cb2 = (...args: any) => {
        str = args[0]
        ret1 = true
    }
    evtMgr.Register(2000, cb2, false)
    evtMgr.Register(2000, cb2, false)
    evtMgr.Notify(2000, "hello args")
    XTest.Expect(str, "Notify with params").ToBe("hello args")

    ret1 = false
    evtMgr.Unregister(2000, cb2)
    XTest.Expect(ret1, "Unregister").ToBe(false)

    evtMgr.Register(3000, () => { ret2 = true })
    evtMgr.Register(3000, () => { ret3 = true })
    evtMgr.Notify(3000)
    XTest.Expect(ret2, "Notify multiple").ToBe(true)
    XTest.Expect(ret3, "Notify multiple").ToBe(true)

    ret2 = false
    ret3 = false
    evtMgr.UnregisterAll()
    evtMgr.Notify(3000)
    XTest.Expect(ret2, "UnregisterAll").ToBe(false)
    XTest.Expect(ret3, "UnregisterAll").ToBe(false)
})