import * as fileinfo from '../index'

import * as chai from 'chai'
const expect = chai.expect

console.log(fileinfo.filenameinfo(__dirname+'/ketto.mp4'))
describe('main test fileinfo', function () {
    it('it works', function (done) {
        expect(fileinfo.filenameinfo(__dirname+'/ketto.mp4')).to.be.ok
        done()
    })
    it('contains the path as string', function (done) {
        expect(fileinfo.filenameinfo(__dirname+'/ketto.mp4')).have.property('path').that.is.a('string')
        done()
    })
    it('contains the extension as string', function (done) {
        expect(fileinfo.filenameinfo(__dirname+'/ketto.mp4')).have.property('extension').that.is.a('string')
        done()
    })
    it('contains the name as string', function (done) {
        expect(fileinfo.filenameinfo(__dirname+'/ketto.mp4')).have.property('name').that.is.a('string')
        done()
    })
    it('contains the fullname as string', function (done) {
        expect(fileinfo.filenameinfo(__dirname+'/ketto.mp4')).have.property('fullname').that.is.a('string')
        done()
    })
})