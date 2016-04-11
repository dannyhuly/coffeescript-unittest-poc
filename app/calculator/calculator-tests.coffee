

describe 'Calculator', ->
    @calc
    beforeEach ->
        @calc = new Calculator()

    describe 'on add', ->

        it 'should add two positive numbers', ->
            #givin
            a = 2
            b = 3
            expectedRes = 5

            #when
            res = @calc.add a, b

            #then
            expect(res).toBe expectedRes

        it 'should handle negative number addition', ->
            #givin
            a = -10
            b = 5
            expectedRes = -5

            #when
            res = @calc.add a, b

            #then
            expect(res).toBe expectedRes

    describe 'on sub', ->

        it 'should subtract two positive numbers', ->
            #givin
            a = 10
            b = 6
            expectedRes = 4

            #when
            res = @calc.sub a, b

            #then
            expect(res).toBe expectedRes

        it 'should handle negative number subtraction', ->
            #givin
            a = 4
            b = -6
            expectedRes = 10

            #when
            res = @calc.sub a, b

            #then
            expect(res).toBe expectedRes

    describe 'on mult', ->

        it 'should multiply positive numbers' #TODO: Implement test
        it 'should multiply negative numbers' #TODO: Implement test
