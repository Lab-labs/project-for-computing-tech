def on_received_number(receivedNumber):
    if receivedNumber == 1:
        pins.servo_write_pin(AnalogPin.P0, 160)
    elif receivedNumber == 2:
        pins.servo_write_pin(AnalogPin.P0, 140)
    elif receivedNumber == 3:
        pins.servo_write_pin(AnalogPin.P0, 120)
    elif receivedNumber == 4:
        pins.servo_write_pin(AnalogPin.P0, 100)
    elif receivedNumber == 5:
        pins.servo_write_pin(AnalogPin.P0, 80)
    elif receivedNumber == 6:
        pins.servo_write_pin(AnalogPin.P0, 60)
    elif receivedNumber == 7:
        pins.servo_write_pin(AnalogPin.P0, 40)
    elif receivedNumber == 8:
        pins.servo_write_pin(AnalogPin.P0, 20)
    else:
        pins.servo_write_pin(AnalogPin.P0, 90)
radio.on_received_number(on_received_number)

numbcheck = 0
# This is for the AT1
radio.set_group(456)

def on_forever():
    global numbcheck
    if input.button_is_pressed(Button.A):
        numbcheck += 1
        basic.pause(200)
    if input.button_is_pressed(Button.B):
        radio.send_number(numbcheck)
        basic.show_number(numbcheck)
        basic.show_leds("""
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            """)
        basic.pause(1000)
        basic.clear_screen()
        numbcheck = 0
    if numbcheck > 10:
        numbcheck = 0
    else:
        pass
basic.forever(on_forever)
