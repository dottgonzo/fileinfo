import * as fileinfo from '../index'

import * as chai from 'chai'
const expect = chai.expect

console.log(fileinfo.filenameinfo('/boot/grub/grub.cfg'))
describe('main test fileinfo', function () {
    it('it works', function (done) {
        expect(fileinfo.filenameinfo('/boot/grub/grub.cfg')).to.be.ok
        done()
    })
    it('contains the path as string', function (done) {
        expect(fileinfo.filenameinfo('/boot/grub/grub.cfg')).have.property('path').that.is.a('string')
        done()
    })
    it('contains the extension as string', function (done) {
        expect(fileinfo.filenameinfo('/boot/grub/grub.cfg')).have.property('extension').that.is.a('string')
        done()
    })
    it('contains the name as string', function (done) {
        expect(fileinfo.filenameinfo('/boot/grub/grub.cfg')).have.property('name').that.is.a('string')
        done()
    })
    it('contains the fullname as string', function (done) {
        expect(fileinfo.filenameinfo('/boot/grub/grub.cfg')).have.property('fullname').that.is.a('string')
        done()
    })
})